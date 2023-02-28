<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white shadow-sm p-0 fixed-top">
      <div class="container nav-box">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top brand"
          />
          <span class="text-pink"> Sunnycos-Rent </span>
        </a>
        <button
          class="navbar-toggler me-3 me-sm-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse navbar-box"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-lg-0 px-2">
            <li class="nav-item me-3 bg-white">
              <span
                class="ps-3 nav-link d-flex align-items-center active-nav"
                aria-current="page"
                v-on:click="scrollTo('#hero')"
                id="span-home"
                >Home</span
              >
            </li>
            <li class="nav-item me-3 bg-white">
              <span
                class="ps-3 nav-link d-flex align-items-center"
                @click="scrollTo('#form')"
                id="span-form"
                >Rent</span
              >
            </li>
            <li class="nav-item me-3 bg-white">
              <span
                class="ps-3 nav-link d-flex align-items-center"
                @click="scrollTo('#check')"
                id="span-check"
                >Cek Order</span
              >
            </li>
            <li class="nav-item me-3">
              <span
                class="ps-3 nav-link d-flex align-items-center bg-white"
                @click="scrollTo('#return')"
                id="span-return"
                >Pengembalian</span
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="section" id="hero">
      <div class="container hero text-center">
        <div class="row justify-content-center mb-4">
          <div class="col-12 col-lg-6">
            <h2>Sekarang cosplay gak harus mahal</h2>
            <h2>Cosplay jadi karakter favoritmu mulai dari 50 ribuan aja</h2>
            <h5>
              Rental di Sunnycos-Rent punya katalog kostum lebih dari 60 katalog
              dan punya 90 lebih kostum
            </h5>
            <a href="#form" class="btn btn-primary btn-rent rounded-pill"
              >Rental Sekarang</a
            >
          </div>
        </div>
        <swiper
          :clickable="true"
          :slidesPerView="1"
          :spaceBetween="30"
          :breakpoints="{
            '576': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            '992': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '1200': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img src="/assets/images/gawr_gura.jpg" alt="gura" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/kobo_kanaeru.jpg" alt="gura" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/nahida_kusanali.jpg" alt="gura" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/nilou.jpg" alt="gura" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/gawr_gura.jpg" alt="gura" />
          </swiper-slide>
          <swiper-slide>
            <img src="/assets/images/kobo_kanaeru.jpg" alt="gura" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="section form bg-page" id="form">
      <div class="container">
        <h3 class="text-center mb-4">Form Rental</h3>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-12">
            <form action="">
              <div class="mb-3">
                <label for="costume_id" class="form-label"
                  >Kostum Karakter
                </label>
                <v-select
                  v-model="costume"
                  :options="result.result"
                  label="name"
                  class="form-control p-0"
                  placeholder="Pilih karakter"
                ></v-select>
              </div>
              <div class="mb-3">
                <label for="accessories">Tambahan aksesories</label>
                <div class="check-input d-flex align-items-center gap-2">
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Aksesories"
                  />
                  Sepatu (10.000)
                </div>
                <div class="check-input d-flex align-items-center gap-2">
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Aksesories"
                  />
                  Sayap (15.000)
                </div>
                <div class="check-input d-flex align-items-center gap-2">
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Aksesories"
                  />
                  Pistol (20.000)
                </div>
              </div>
              <div class="mb-3">
                <label for="total_price" class="form-label">Total Harga</label>
                <input
                  type="number"
                  class="form-control"
                  id="total_price"
                  name="total_price"
                  value="100000"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Nama</label>
                <input type="text" class="form-control" id="name" name="name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="telp_numb" class="form-label">No telepon</label>
                <input
                  type="number"
                  class="form-control"
                  id="telp_numb"
                  name="telp_numb"
                />
              </div>
              <div class="mb-3">
                <label for="whatsapp" class="form-label">No whatsapp</label>
                <input
                  type="number"
                  class="form-control"
                  id="whatsapp"
                  name="whatsapp"
                />
              </div>
              <div class="mb-3">
                <label for="instagram" class="form-label"
                  >Instagram (aktif no privat)</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="instagram"
                  name="instagram"
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Alamat Lengkap</label>
                <textarea
                  class="form-control"
                  id="address"
                  rows="3"
                  name="address"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="family_number1" class="form-label"
                  >No Telepon Kerabat 1</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="family_number1"
                  name="family_number1"
                />
              </div>
              <div class="mb-3">
                <label for="family_number2" class="form-label"
                  >No Telepon Kerabat 2</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="family_number2"
                  name="family_number2"
                />
              </div>
              <div class="mb-3">
                <label for="province" class="form-label"> Provinsi </label>
                <v-select
                  v-model="province"
                  :options="province"
                  label="province"
                  class="form-control p-0"
                  placeholder="Pilih Provinsi"
                ></v-select>
              </div>
              <div class="mb-3">
                <label for="city" class="form-label"> Kota </label>
                <v-select
                  v-model="city"
                  :options="cities"
                  label="name"
                  class="form-control p-0"
                  placeholder="Pilih Kota"
                ></v-select>
              </div>
              <div class="mb-3">
                <label for="district" class="form-label"> Kecamatan </label>
                <v-select
                  v-model="district"
                  :options="districts"
                  label="text"
                  class="form-control p-0"
                  placeholder="Pilih Kecamatan"
                ></v-select>
              </div>
              <div class="mb-3">
                <label for="post_code" class="form-label">Kode Pos</label>
                <input
                  type="number"
                  class="form-control"
                  id="post_code"
                  name="post_code"
                />
              </div>
              <div class="mb-3">
                <label for="KTP_pict" class="form-label"
                  >Foto KTP/KK/Kartu Pelajar</label
                >
                <input
                  class="form-control"
                  type="file"
                  id="KTP_pict"
                  name="KTP_pict"
                />
              </div>
              <div class="mb-3">
                <label for="KTP_selfie" class="form-label"
                  >Foto selfie dengan KTP/KK/Kartu Pelajar</label
                >
                <input
                  class="form-control"
                  type="file"
                  id="KTP_selfie"
                  name="KTP_selfie"
                />
              </div>
              <div class="mb-3">
                <label for="payment_pict" class="form-label"
                  >Bukti Pembayaran/DP</label
                >
                <input
                  class="form-control"
                  type="file"
                  id="payment_pict"
                  name="payment_pict"
                />
              </div>
              <div class="mb-3">
                <label for="rent_date" class="form-label"
                  >Tanggal Sewa Kostum (Kostum dipakai)</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="rent_date"
                  name="rent_date"
                />
              </div>
              <div class="mb-3">
                <label for="ship_date" class="form-label"
                  >Tanggal Pengiriman Kostum</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="ship_date"
                  name="ship_date"
                />
              </div>
              <div class="submit text-center mt-4">
                <button
                  type="submit"
                  class="btn w-75 btn-primary rounded-pill px-4 py-2 border border-dark fw-semibold"
                >
                  Rental
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Cek Order -->

    <section class="section min-vh-100 bg-white" id="check">
      <div class="container">
        <h3 class="text-center mb-4">Cek Order</h3>
        <div class="container px-4 d-flex flex-column align-items-center">
          <div class="col-12 col-md-6">
            <form action="" class="mx-auto">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Kode Order"
                />
                <button
                  class="btn btn-primary"
                  type="submit"
                  id="button-addon2"
                >
                  Cek
                </button>
              </div>
            </form>
          </div>
          <div class="check-result">
            <div class="result-container">
              <div class="field d-flex mb-1 bg-primary rounded gap-1">
                <div class="label col-12 py-1 px-2 fw-bold">
                  Kode-Order0123456789
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Nama Lengkap
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  Prasetyo Adi Pratama Nugroho
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Alamat Lengkap
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  Jl. Asemrowo Baru No.14 RT.01/RW.03 Kec. Asemrowo, Surabaya,
                  Jawa Timur
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Karakter
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  Kobo Kanaeuwu Yaeger
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Tanggal Sewa
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  20 Maret 2023
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Total Harga
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  Rp 150.000
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Tambahan
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  <ul class="list-group">
                    <li class="list-group-item border-0 bg-transparent">
                      Sepatu (10.000)
                    </li>
                    <li class="list-group-item border-0 bg-transparent">
                      Pistol (20.000)
                    </li>
                    <li class="list-group-item border-0 bg-transparent">
                      Pedang (15.000)
                    </li>
                  </ul>
                </div>
              </div>
              <div class="field d-flex mb-1 rounded gap-1">
                <div class="label col-4 bg-primary py-1 px-2 rounded-start">
                  Status Kembali
                </div>
                <div class="value col-8 bg-primary py-1 px-2 rounded-end">
                  Belum dikembalikan
                </div>
              </div>
            </div>
            <table class="table bg-primary rounded">
              <thead>
                <tr>
                  <th scope="col" class="text-center align-middle">
                    Status Pembayaran
                  </th>
                  <th scope="col" class="text-center align-middle">
                    Status Pengiriman
                  </th>
                  <th scope="col" class="text-center align-middle">Resi</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <td class="text-center align-middle">DP</td>
                  <td class="text-center align-middle">Sedang Dikirim</td>
                  <td class="text-center align-middle">JNT-0987654321</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Pengembalian -->
    <section class="section vh-100 bg-page" id="return">
      <div class="container">
        <h3 class="text-center mb-4">Form Pengembalian</h3>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-12">
            <form action="">
              <div class="mb-3">
                <label for="kode_order_pengembalian" class="form-label"
                  >Kode Order
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="kode_order_pengembalian"
                  id="kode_order_pengembalian"
                />
              </div>
              <div class="mb-3">
                <label for="resi" class="form-label">Resi</label>
                <input type="text" class="form-control" name="resi" id="resi" />
              </div>
              <div class="mb-3">
                <label for="pengembalian_pict" class="form-label"
                  >Foto Bukti Pengembalian Paket/Screenshoot Aplikasi</label
                >
                <input
                  class="form-control"
                  type="file"
                  id="engembalian_pict"
                  name="engembalian_pict"
                />
              </div>
              <div class="submit text-center mt-4">
                <button
                  type="submit"
                  class="btn w-75 btn-primary rounded-pill px-4 py-2 border border-dark fw-semibold"
                >
                  Kembalikan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-custome-dark text-light py-5">
      <div class="container row">
        <div class="col-12 col-lg-8 mb-3">
          <h3>Sunnycos-Rent</h3>
        </div>
        <div class="col-12 col-lg-4 mb-3 d-flex justify-content-left gap-3">
          <div class="footer-nav">
            <span v-on:click="scrollTo('#hero')">Home</span>
          </div>
          <div class="footer-nav">
            <span v-on:click="scrollTo('#form')">Rent</span>
          </div>
          <div class="footer-nav">
            <span v-on:click="scrollTo('#check')">Cek Order</span>
          </div>
          <div class="footer-nav">
            <span v-on:click="scrollTo('#return')">Pengembalian</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="container text-center">&copy;Sunnycos-rent 2023</div>
    </footer>
  </div>
</template>

<script>
import { VueSelect as vSelect } from "vue-select";
import "vue-select/dist/vue-select.css";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    vSelect,
  },
  methods: {
    scrollTo(to) {
      this.$router.replace({ name: this.$route.name, hash: to });
      this.result.result.forEach((item) => {
        console.log(item.name);
      });
    },
  },
  data() {
    return {
      data: [
        ["", "Ford", "Volvo", "Toyota", "Honda"],
        ["2016", 10, 11, 12, 13],
        ["2017", 20, 11, 14, 13],
        ["2018", 30, 15, 12, 13],
      ],
      costume: "",
      province: "",
      city: "",
      cities: [
        { id: 1, name: "city 1", region: "region A" },
        { id: 2, name: "city 2", region: "region A" },
        { id: 3, name: "city 3", region: "region B" },
        { id: 4, name: "city 4", region: "region C" },
        { id: 5, name: "city 5", region: "region D" },
      ],
      selected: "",
      district: "",
      districts: [
        { id: 1, text: "apple" },
        { id: 2, text: "berry" },
        { id: 3, text: "cherry" },
      ],
    };
  },
  async setup() {
    const { data: result } = await useFetch(
      "http://www.sunyycosrent-api.test/api/costume?all=true"
    );

    return {
      modules: [Autoplay],
      result,
    };
  },
};
</script>