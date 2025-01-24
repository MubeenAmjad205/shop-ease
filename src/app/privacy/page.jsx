"use client"
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-[85%] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full my-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Privacy Policy</h1>
        <div className="space-y-8 text-gray-700">
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-100">
            <p>
              At ShopEase, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-100">
            <h2 className="text-xl font-semibold text-purple-600">1. Information We Collect</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Personal Information: Name, email address, phone number, and shipping address.</li>
              <li>Payment Information: Credit/debit card details and billing address.</li>
              <li>Usage Data: Information about how you interact with our website, such as pages visited and time spent.</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-50">
            <h2 className="text-xl font-semibold text-purple-600">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside mt-2">
              <li>To process orders and deliver products.</li>
              <li>To provide customer support and respond to inquiries.</li>
              <li>To improve our platform and user experience.</li>
              <li>To send promotional emails and updates (with your consent).</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-50">
            <h2 className="text-xl font-semibold text-purple-600">3. Data Security</h2>
            <p className="mt-2">
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, please note that no method of transmission over the internet is completely secure.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-100">
            <h2 className="text-xl font-semibold text-purple-600">4. Sharing Your Information</h2>
            <p className="mt-2">
              We do not sell or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our platform, as long as they agree to keep your information confidential.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-100">
            <h2 className="text-xl font-semibold text-purple-600">5. Your Rights</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Access: You can request a copy of the personal data we hold about you.</li>
              <li>Correction: You can ask us to update or correct your information.</li>
              <li>Deletion: You can request the deletion of your personal data.</li>
            </ul>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-purple-50">
            <h2 className="text-xl font-semibold text-purple-600">6. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg bg-pink-50">
            <h2 className="text-xl font-semibold text-purple-600">7. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact us at <span className="text-purple-700">support@shopease.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;