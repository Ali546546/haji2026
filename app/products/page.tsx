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
          price: 1649,
         description:
  "2 Pouch • 1300g Shera • 60 Fried Gulab Jamun\nWeight: 1.5–1.7kg\n🚚 FREE Delivery All Over Pakistan",
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
    setShowSuccess(false);
    setCustomer({ name: "", phone: "", address: "" });
    setShowModal(true);
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

    window.open(
      `https://wa.me/923245050786?text=${encodeURIComponent(message)}`,
      "_blank"
    );

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

        {/* PRODUCTS */}
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

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ×
            </button>

            {/* STEP 1 - OPTIONS */}
            {!showForm && !showSuccess && (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center text-[#4b0f1a]">
                  {selectedProduct.name}
                </h3>

                {selectedProduct.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedOption(option)}
                    className={`border p-4 rounded-lg mb-3 cursor-pointer ${
                      selectedOption === option
                        ? "border-[#4b0f1a] bg-[#fff7f5]"
                        : ""
                    }`}
                  >
                    <p className="font-semibold">{option.label}</p>
                    <p>Rs. {option.price}</p>
                    {option.description && (
                      <p className="text-sm text-gray-500">
                        {option.description}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  onClick={continueToForm}
                  className="w-full bg-[#4b0f1a] text-white py-3 rounded-full mt-4"
                >
                  Continue
                </button>
              </>
            )}

            {/* STEP 2 - FORM + PAYMENT + DELIVERY */}
            {showForm && !showSuccess && (
              <>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Enter Your Details
                </h3>

                <input
                  className="w-full border p-3 rounded mb-3"
                  placeholder="Full Name"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({ ...customer, name: e.target.value })
                  }
                />

                <input
                  className="w-full border p-3 rounded mb-3"
                  placeholder="Phone Number"
                  value={customer.phone}
                  onChange={(e) =>
                    setCustomer({ ...customer, phone: e.target.value })
                  }
                />

                <textarea
                  className="w-full border p-3 rounded mb-4"
                  placeholder="Address"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({ ...customer, address: e.target.value })
                  }
                />

                {/* PAYMENT */}
                <div className="bg-[#fff7f5] p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-[#4b0f1a] mb-2">
                    Advance Payment
                  </h4>

                  <p className="text-sm mb-2">
                    Payment for Gulab Jamun must be made in advance.
                  </p>

                  <p className="font-semibold">EasyPaisa</p>
                  <p>0311-4555700</p>
                  <p>Muhammad Aown</p>

                  <p className="font-semibold mt-2">Allied Bank</p>
                  <p>PK69ABPA0010115575610013</p>
                  <p>Muhammad Aown</p>

                  <p className="text-red-600 mt-2 text-sm">
                    Send screenshot to: 0324 5050786
                  </p>
                </div>

                {/* DELIVERY */}
                <div className="bg-white border p-4 rounded-xl mb-4">
                  <h4 className="font-bold text-[#4b0f1a] mb-2">
                    Delivery Information
                  </h4>

                  <p className="font-semibold">Kujja & Balti (Lahore only)</p>
                  <p className="text-sm mb-2">
                    Delivery via inDrive/Bykea (charges separate)
                  </p>

                  <p className="font-semibold">VIP Box (All Pakistan)</p>
                  <p className="text-sm">
                    Delivery 3–4 days, charges Rs. 350 COD
                  </p>
                </div>

                <button
                  onClick={submitOrder}
                  className="w-full bg-[#4b0f1a] text-white py-3 rounded-full"
                >
                  Submit Order
                </button>
              </>
            )}

            {/* SUCCESS */}
            {showSuccess && (
              <div className="text-center py-10">
                <h3 className="text-green-600 text-2xl font-bold">
                  Order Placed!
                </h3>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-[#4b0f1a] text-white px-6 py-2 rounded-full"
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
