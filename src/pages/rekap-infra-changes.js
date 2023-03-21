import React, { useState } from "react";
import { Input, Table } from "react-daisyui";

import FooterComponent from "@/components/FooterComponent";
import GapComponent from "@/components/GapComponent";
import HeadComponent from "@/components/HeadComponent";
import NavbarComponent from "@/components/NavbarComponent";

const RekapInfraChanges = () => {
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
              <span className="label-text">Dari Tanggal</span>
            </label>
            <Input name="date" type="date" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Sampai Tanggal</span>
            </label>
            <Input name="date" type="date" />
          </div>
        </div>

        <GapComponent height={30} />

        <div className="overflow-x-auto">
          <Table className="w-full h-full">
            <Table.Head>
              <span />
              <span>Total Changes</span>
              <span>Belum Closed</span>
              <span>Closed</span>
              <span>Persentase (%)</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span>
                  <p>Haidar</p>
                </span>
                <span>10</span>
                <span>5</span>
                <span>5</span>
                <span>50%</span>
              </Table.Row>

              <Table.Row>
                <span>
                  <p>Jaya</p>
                </span>
                <span>10</span>
                <span>5</span>
                <span>5</span>
                <span>50%</span>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <span>Total</span>
              <span>20</span>
              <span>10</span>
              <span>10</span>
              <span></span>
            </Table.Footer>
          </Table>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default RekapInfraChanges;
