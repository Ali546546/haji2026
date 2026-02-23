"use client";

import { useState } from "react";
import Image from "next/image";

type Option = {
  label: string;
  price: number;
  description?: string;
};

type Product = {
  id: number;
  name: string;
  image: string;
  options: Option[];
};

export default function ProductsSection() {
  const products: Product[] = [
    {
      id: 1,
      name: "SPECIAL KUJA GULAB JAMUN",
      image: "/products/1111.png",
      options: [
        { label: "1 KG Pack", price: 1000 },
        { label: "2 KG Pack", price: 2000 },
        { label: "3 KG Pack", price: 3000 },
        { label: "4 KG Pack", price: 4000 },
      ],
    },
    {
      id: 2,
      name: "VIP BOX PACKING GULAB JAMUN",
      image: "/products/2222.png",
      options: [
        {
          label: "VIP Box Pack",
          price: 1200,
          description:
            "2 Pouch • 1300g Shera • 60 Fried Gulab Jamun • Weight 1.5-1.7kg",
        },
      ],
    },
    {
      id: 3,
      name: "PLASTIC PACKING GULAB JAMUN",
      image: "/products/gulab_jaman.jpg",
      options: [
        { label: "1 KG Balti", price: 1200 },
        { label: "2 KG Balti", price: 2400 },
        { label: "3 KG Balti", price: 3600 },
        { label: "4 KG Balti", price: 4800 },
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedOption(null);
    setShowForm(false);
    setCustomer({ name: "", phone: "", address: "" });
    setShowModal(true);
    setShowSuccess(false);
  };

  const continueToForm = () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }
    setShowForm(true);
  };

  const submitOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all fields");
      return;
    }

    const message = `
New Order:

Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Product: ${selectedProduct?.name}
Option: ${selectedOption?.label}
Price: Rs.${selectedOption?.price}
    `;

    // Open WhatsApp
    window.open(
      `https://wa.me/923245050786?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Show success popup
    setShowSuccess(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowForm(false);
    setShowSuccess(false);
  };

  return (
    <section className="py-16 bg-[#fff7f5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4b0f1a] mb-12">
          Buy Fresh Gulab Jamun
        </h2>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openProduct(product)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#4b0f1a]">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black font-bold text-xl"
            >
              ×
            </button>

            {/* PRODUCT OPTIONS */}
            {!showForm && !showSuccess && (
              <>
                <h3 className="text-2xl font-bold mb-6 text-[#4b0f1a] text-center">
                  {selectedProduct.name}
                </h3>

                {selectedProduct.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedOption(option)}
                    className={`border p-4 rounded-lg mb-4 cursor-pointer transition ${
                      selectedOption === option
                        ? "border-[#4b0f1a] bg-[#fff7f5]"
                        : "border-gray-200"
                    }`}
                  >
                    <p className="font-semibold">{option.label}</p>
                    <p className="text-gray-600">Rs. {option.price}</p>
                    {option.description && (
                      <p className="text-sm text-gray-500 mt-2">
                        {option.description}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  onClick={continueToForm}
                  className="w-full bg-[#4b0f1a] text-white py-3 rounded-full hover:bg-[#6a1625] mt-4"
                >
                  Continue
                </button>
              </>
            )}

            {/* CUSTOMER FORM */}
            {showForm && !showSuccess && (
              <>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Enter Your Details
                </h3>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border p-3 rounded mb-3"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border p-3 rounded mb-3"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                />

                <textarea
                  placeholder="Full Address"
                  className="w-full border p-3 rounded mb-4"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                />

                <button
                  onClick={submitOrder}
                  className="w-full bg-[#4b0f1a] text-white py-3 rounded-full hover:bg-[#6a1625]"
                >
                  Submit Order
                </button>
              </>
            )}

            {/* SUCCESS POPUP */}
            {showSuccess && (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  ✅ Thank you for your order!
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team will contact you shortly. WhatsApp message opened.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#4b0f1a] text-white py-3 px-6 rounded-full hover:bg-[#6a1625]"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}