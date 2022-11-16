import { Routes, Route, Navigate } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import ASICPage from "./ASICPage";
import AuthPage from "./AuthPage";
import DashboardPage from "./DashboardPage";
import ElectricityBillsPage from "./ElectricityBillsPage";
import MyProductsPage from "./MyProductsPage";
import ShopPage from "./ShopPage";
import WalletPage from "./WalletPage";
import PaymentPage from "./PaymentPage";
import NotificationPage from "./NotificationPage";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/shop/*" element={<ShopPage />} />
      <Route path="/shop/asic" element={<ASICPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/bills" element={<ElectricityBillsPage />} />
      <Route path="/products" element={<MyProductsPage />} />
      <Route path="/shop/checkout" element={<CheckoutPage />} />
      <Route path="/shop/payment" element={<PaymentPage />} />
      <Route path="/notification" element={<NotificationPage />} />
    </Routes>
  );
};
export default AllPages;
