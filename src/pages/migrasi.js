import React, { useState } from "react";

import { Button, Input, Modal, Table } from "react-daisyui";

import HeadComponent from "@/components/HeadComponent";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import GapComponent from "@/components/GapComponent";

export default function Migrasi() {
  const [visibleTambah, setVisibleTambah] = useState(false);
  const [visibleUbah, setVisibleUbah] = useState(false);

  const toggleVisibleTambah = () => {
    setVisibleTambah(!visibleTambah);
  };

  const toggleVisibleUbah = () => {
    setVisibleUbah(!visibleUbah);
  };

  return (
    <>
      <HeadComponent />
      <NavbarComponent />
      <div className="w-screen h-screen flex flex-col px-4 lg:px-8">
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Tanggal</span>
            </label>
            <Input name="date" type="date" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Cari</span>
            </label>
            <Input name="search" type="text" />
          </div>
        </div>

        <GapComponent height={30} />

        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <span className="flex flex-row justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-6 h-6 text-blue-400"
                  onClick={toggleVisibleTambah}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
              <span>Tanggal</span>
              <span>Aplikasi yang dimigrasi</span>
              <span>Nama item migrasi</span>
              <span>Impact</span>
              <span>Summary changes</span>
              <span>Kode project</span>
              <span>PIC User</span>
              <span>Keputusan</span>
              <span>PIC IGW</span>
              <span>Start date</span>
              <span>End date</span>
              <span>Start time</span>
              <span>Finish time</span>
              <span>Deploy by Infra (%)</span>
              <span>Kesesuaian rundown dengan di lapangan (%)</span>
              <span>Status (In Progress, Success, Reschedule, Rollback)</span>
              <span>PTR regresi</span>
              <span>PTR</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>

              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
                  <p>2809</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-yellow-400"
                    onClick={toggleVisibleUbah}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="cursor-pointer w-4 h-4 text-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span>Quality Control Specialist</span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
                <span>12/16/2020</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
                <span>Blue</span>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <span>Total migrasi : 10</span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Table.Footer>
          </Table>
        </div>
      </div>

      {/* START: Modal Tambah */}
      <Modal open={visibleTambah} onClickBackdrop={toggleVisibleTambah}>
        <Modal.Header className="font-bold">TAMBAH MODAL!</Modal.Header>

        <Modal.Body>
          You have been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>
      </Modal>
      {/* END: Modal Tambah */}

      {/* START: Modal Ubah */}
      <Modal open={visibleUbah} onClickBackdrop={toggleVisibleUbah}>
        <Modal.Header className="font-bold">UBAH MODAL!</Modal.Header>

        <Modal.Body>
          You have been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>
      </Modal>
      {/* END: Modal Ubah */}

      <FooterComponent />
    </>
  );
}
