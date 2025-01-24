import React from 'react';

const TermsAndServices = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full my-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Terms and Services</h1>
        <div className="space-y-8 text-gray-700">
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-100">
            <p>
              Welcome to ShopEase! By accessing or using our platform, you agree to comply with and be bound by these Terms and Services. Please read them carefully.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-100">
            <h2 className="text-xl font-semibold text-purple-600">1. User Accounts</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Users must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-50">
            <h2 className="text-xl font-semibold text-purple-600">2. Acceptable Use</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Do not use our platform for any unlawful or fraudulent activities.</li>
              <li>Respect the intellectual property rights of others.</li>
              <li>Do not attempt to interfere with the platform's functionality or security.</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-50">
            <h2 className="text-xl font-semibold text-purple-600">3. Orders and Payments</h2>
            <ul className="list-disc list-inside mt-2">
              <li>All orders are subject to availability and confirmation of payment.</li>
              <li>We reserve the right to refuse or cancel any order at our discretion.</li>
              <li>Ensure that your payment information is accurate and up-to-date.</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-100">
            <h2 className="text-xl font-semibold text-purple-600">4. Returns and Refunds</h2>
            <p className="mt-2">
              Our return and refund policy is outlined on our website. Please review it before making a purchase. Refunds will be processed within a reasonable timeframe.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-100">
            <h2 className="text-xl font-semibold text-purple-600">5. Limitation of Liability</h2>
            <p className="mt-2">
              ShopEase is not liable for any indirect, incidental, or consequential damages arising from the use of our platform. Our total liability is limited to the amount paid by you for the products or services.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-50">
            <h2 className="text-xl font-semibold text-purple-600">6. Changes to Terms</h2>
            <p className="mt-2">
              We may update these Terms and Services from time to time. Continued use of our platform constitutes acceptance of the revised terms.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-50">
            <h2 className="text-xl font-semibold text-purple-600">7. Contact Us</h2>
            <p className="mt-2">
              If you have any questions or concerns about these Terms and Services, please contact us at <span className="text-purple-700">support@shopease.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndServices;
