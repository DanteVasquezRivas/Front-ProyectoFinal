const getAllOrders = async (req, res) => {
  try {
    const result = await req.db.query('SELECT * FROM pedidos');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching orders');
  }
};

module.exports = {
  getAllOrders
};
