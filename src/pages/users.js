import React, { useState } from "react";

import { Button, Input, Modal, Select, Table } from "react-daisyui";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import HeadComponent from "@/components/HeadComponent";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import GapComponent from "@/components/GapComponent";

export default function Users() {
  const router = useRouter();

  const [disabledButtonTambah, setDisabledButtonTambah] = useState(false);
  const [disabledButtonUbah, setDisabledButtonUbah] = useState(false);

  const [visibleTambah, setVisibleTambah] = useState(false);
  const [visibleUbah, setVisibleUbah] = useState(false);

  const toggleVisibleTambah = () => {
    setVisibleTambah(!visibleTambah);
  };

  const toggleVisibleUbah = () => {
    setVisibleUbah(!visibleUbah);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Hapus data?",
      text: "Data yang telah dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E50914",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        alert("OK");
      }
    });
  };

  return (
    <>
      <HeadComponent />
      <NavbarComponent />
      <div className="w-screen h-screen flex flex-col px-4 lg:px-8">
        <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Cari</span>
            </label>
            <Input name="search" type="search" />
          </div>
        </div>

        <GapComponent height={30} />

        <div className="overflow-x-auto">
          <Table className="w-full h-full">
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
              <span>Nama</span>
              <span>Username</span>
              <span>Email address</span>
              <span>Role</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span className="flex flex-row justify-center items-center space-x-4">
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
                    onClick={handleDelete}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Cy Ganderton</span>
                <span className="max-w-md whitespace-nowrap">
                  Quality Control Specialist
                </span>
                <span>Littel, Schaden and Vandervort</span>
                <span>Canada</span>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <span>Total users : 10</span>
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
        <Modal.Header className="font-bold">Tambah Data</Modal.Header>

        <Modal.Body>
          <div className="flex flex-col w-full component-preview p-4 items-center justify-center gap-2">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <Input name="name" type="text" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <Input name="username" type="text" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Input name="password" type="password" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <Input name="email_adress" type="email" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <Select
                name="role"
                // value={value}
                // onChange={(event) => setValue(event.target.value)}
              >
                <option value={""}>Pilih role user</option>
                <option value={"admin"}>Admin</option>
                <option value={"operator"}>Operator</option>
                <option value={"team_leader"}>Team Leader</option>
                <option value={"engineer"}>Engineer</option>
              </Select>
            </div>

            <GapComponent height={10} />

            <div className="form-control w-full max-w-md">
              <Button
                onClick={() => router.push(`/users`)}
                className={`capitalize text-white ${
                  disabledButtonTambah && "cursor-not-allowed"
                }`}
                disabled={disabledButtonTambah}
                color="accent"
              >
                {disabledButtonTambah ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-white">Loading...</p>
                  </>
                ) : (
                  "Tambah"
                )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* END: Modal Tambah */}

      {/* START: Modal Ubah */}
      <Modal open={visibleUbah} onClickBackdrop={toggleVisibleUbah}>
        <Modal.Header className="font-bold">Ubah Data</Modal.Header>

        <Modal.Body>
          <div className="flex flex-col w-full component-preview p-4 items-center justify-center gap-2">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <Input name="name" type="text" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <Input name="username" type="text" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Input name="password" type="password" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <Input name="email_adress" type="email" required />
            </div>

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <Select
                name="role"
                // value={value}
                // onChange={(event) => setValue(event.target.value)}
              >
                <option value={""}>Pilih role user</option>
                <option value={"admin"}>Admin</option>
                <option value={"operator"}>Operator</option>
                <option value={"team_leader"}>Team Leader</option>
                <option value={"engineer"}>Engineer</option>
              </Select>
            </div>

            <GapComponent height={10} />

            <div className="form-control w-full max-w-md">
              <Button
                onClick={() => router.push(`/users`)}
                className={`capitalize text-white ${
                  disabledButtonUbah && "cursor-not-allowed"
                }`}
                disabled={disabledButtonUbah}
                color="warning"
              >
                {disabledButtonUbah ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-white">Loading...</p>
                  </>
                ) : (
                  "Ubah"
                )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* END: Modal Ubah */}

      <FooterComponent />
    </>
  );
}
