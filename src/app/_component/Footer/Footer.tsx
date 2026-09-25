import Link from "next/link";
import React from "react";
import logo from "../../../assets/images/freshcart-logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link className="inline-block mb-6" href="/">
              <div className="bg-white rounded-lg px-4 py-2 inline-block">
                <Image
                  alt="FreshCart Logo"
                  loading="lazy"
                  width={160}
                  height={31}
                  decoding="async"
                  data-nimg={1}
                  className="h-8 w-auto"
                  style={{ color: "transparent" }}
                  src={logo}
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>+1 (800) 123-4567</span>
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-green-600"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span>support@freshcart.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
                <svg
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="svg-inline--fa fa-facebook-f w-3"
                  role="img"
                  viewBox="0 0 320 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
                <svg
                  data-prefix="fab"
                  data-icon="twitter"
                  className="svg-inline--fa fa-twitter w-4"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
                <svg
                  data-prefix="fab"
                  data-icon="instagram"
                  className="svg-inline--fa fa-instagram w-4"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
              >
                <svg
                  data-prefix="fab"
                  data-icon="youtube"
                  className="svg-inline--fa fa-youtube w-4"
                  role="img"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/shop"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/categories"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/brands"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/products?category=6439d58a0049ad0b52b9003f"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/products?category=6439d2d167d9aa4ca970649f"
                >
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/products?category=6439d5b90049ad0b52b90048"
                >
                  Women's Fashion
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/profile"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/profile/orders"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/wishlist"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/cart"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/login"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/register"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/help"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/shipping"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/returns"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/track-order"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  href="/cookies"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {/* */}2026{/* */} FreshCart. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Visa</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Mastercard</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                  <path
                    fillRule="evenodd"
                    d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
