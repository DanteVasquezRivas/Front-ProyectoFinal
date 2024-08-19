// traer todos los productos
const getAllProducts = async (req, res) => {
  try {
    const result = await req.db.query('SELECT * FROM productos');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
};

// Obtener por ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await req.db.query('SELECT * FROM productos WHERE id_productos = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Product not found');
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching product');
  }
};

// Crea un nuevo producto
const createProduct = async (req, res) => {
  const { nombre, descripcion, image_url, precio } = req.body;
  try {
    const result = await req.db.query(
      'INSERT INTO productos (nombre, descripcion, image_url, precio) VALUES ($1, $2, $3, $4) RETURNING *',
      [nombre, descripcion, image_url, precio]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating product');
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
