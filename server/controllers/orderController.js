const Order = require("../model/Order");
const sendEmail = require("../utils/sendEmail");

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;
    if (!items || items.length === 0 || !totalAmount || !address) {
      return res
        .status(400)
        .json({ message: "Missing required order details" });
    } else {
      const order = new Order({
        user: req.user._id,
        items,
        totalAmount,
        address,
        paymentId,
      });
      await order.save();
      const message = `Dear ${req.user.name},\n\nThank you for your order. Your order has been placed successfully created with the following details:\n\nOrder ID: ${order._id}\nTotal Amount: ${totalAmount}\nShipping Address: ${address}\n\nWe will notify you once your order is shipped.\n\nBest regards,\nBuyZa Team`;
      await sendEmail(req.user.email, "Order Confirmation", message);
      res.status(201).json({ message: "Order created successfully", order });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.productId",
      "name price",
    );
    res.status(200).json({ message: "Orders retrieved successfully", orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "id name");
    res.status(200).json({ message: "Orders retrieved successfully", orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = status;
      await order.save();
      res.json({ message: "Order status updated", order });
    } else {
      res.status(404).json({ message: "Oder not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating order status" });
  }
};
module.exports = {
  createOrder,
  myOrders,
  getOrders,
  updateOrderStatus,
  myOrders,
};
