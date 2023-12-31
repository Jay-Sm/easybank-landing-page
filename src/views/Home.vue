<template>
  <div>
    <header
      class="absolute top-0 left-0 right-0 space-x-4 h-[5rem] pl-[7rem] pr-[9.7rem] sm:pl-[2rem] sm:pr-[8.6rem] xsm:pl-[2rem] xsm:pr-[4rem] t:px-[2rem] m:px-[2rem] bg-white z-20 flex items-center justify-between select-none">
      <img src="../assets/images/logo.svg" alt="easybank logo" class="logo">
      <nav v-if="windowWidth > 759" class="flex space-x-8 text-grayish-blue ml-2 h-full">
        <button class="h-full flex flex-col justify-between items-center">
          <p class="my-auto">Home</p>
          <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
        </button>
        <button class="h-full flex flex-col justify-between items-center">
          <p class="my-auto">About</p>
          <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
        </button>
        <button class="h-full flex flex-col justify-between items-center">
          <p class="my-auto">Contact</p>
          <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
        </button>
        <button class="h-full flex flex-col justify-between items-center">
          <p class="my-auto">Blog</p>
          <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
        </button>
        <button class="h-full flex flex-col justify-between items-center">
          <p class="my-auto">Careers</p>
          <div class="hovered-bar h-1 w-0 theme-gradient transition-all"></div>
        </button>
      </nav>
      <button v-if="windowWidth <= 759" @click="modalOpen = !modalOpen"
        class="min-w-10 w-10 h-10 flex justify-center items-center hover:bg-grayish-blue hover:bg-opacity-20 rounded-full transition-all">
        <img src="../assets/images/icon-hamburger.svg" class="w-10/12">
      </button>
      <button v-if="windowWidth > 759" class="invite-button ml-2">Request Invite</button>
    </header>

    <mobileModal v-if="modalOpen && windowWidth < 759" @close-modal="modalOpen = !modalOpen" />

    <section class="relative flex flex-row pr-0 t:px-0 m:px-0 t:flex-col m:flex-col t:items-center m:items-center">
      <div
        class="w-[41%] t:w-full m:w-full h-[45rem] sm:h-[36rem] xsm:h-[36rem] t:mb-32 m:mb-32 flex flex-col justify-center t:justify-end m:justify-end t:items-center m:items-center t:text-center m:text-center space-y-[2rem]">
        <h1 class="text-5xl font-300 w-[23rem]">Next generation digital banking</h1>
        <p class="text-grayish-blue w-[25rem] t:w-[22rem] m:w-[22rem]">
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting,
          investing, and much more.
        </p>
        <button class="invite-button">Request Invite</button>
      </div>
      <div v-if="windowWidth > 759" class="intro-img-desktop"></div>
      <div v-if="windowWidth < 759" class="intro-img-mobile"></div>
      <img src="../assets/images/image-mockups.png" class="mockup-img">
    </section>

    <section
      class="bg-light-grayish-blue z-0 py-[6rem] flex flex-col justify-center items-center space-y-16 m:space-y-10">
      <div class="flex flex-col space-y-6 w-full m:text-center">
        <h2>Why choose Easybank?</h2>
        <p class="max-w-[35.5rem] min-w-[20rem] text-grayish-blue">We leverage Open Banking to turn your bank account into
          your financial
          hub. Control
          your finances like never before.</p>
      </div>

      <div class="flex justify-between m:justify-center w-full space-x-4 m:space-x-0 m:flex-wrap">
        <div class="benefit-card">
          <img src="../assets/images/icon-online.svg" class="w-16 h-16">
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
          </p>
        </div>
        <div class="benefit-card">
          <img src="../assets/images/icon-budgeting.svg" class="w-16 h-16">
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
          </p>
        </div>
        <div class="benefit-card">
          <img src="../assets/images/icon-onboarding.svg" class="w-16 h-16">
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start taking control of your finances right
            away.
          </p>
        </div>
        <div class="benefit-card">
          <img src="../assets/images/icon-api.svg" class="w-16 h-16">
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one account. Tracking your money has never been
            easier.
          </p>
        </div>
      </div>

    </section>

    <section class="w-full py-[4rem] space-y-12">

      <h2 class="m:text-center">Latest Articles</h2>

      <div class="article-grid">
        <div class="article">
          <img src="../assets/images/image-currency.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Claire Robinson</p>
            <h4 class="article-title">Receive money in any currency with no fees</h4>
            <p class="h-16 article-text">
              {{ maxLength(`The world is getting smaller and we’re becoming more mobile. So why should you be forced to
              only receive money in a single`) }}</p>
          </div>
        </div>
        <div class="article">
          <img src="../assets/images/image-restaurant.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Wilson Hutton</p>
            <h4 class="article-title">Treat yourself without worrying about money</h4>
            <p class="h-16 article-text">{{ maxLength(`Our simple budgeting feature allows you to
              separate out your spending and set realistic limits each month. That means you`) }}</p>
          </div>
        </div>
        <div class="article">
          <img src="../assets/images/image-plane.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Wilson Hutton</p>
            <h4 class="article-title">Take your Easybank card wherever you go</h4>
            <p class="h-16 article-text">{{ maxLength(`We want you to enjoy your travels. This is
              why we don’t charge any fees on purchases while you’re abroad. We’ll even show you`) }}</p>
          </div>
        </div>
        <div class="article">
          <img src="../assets/images/image-confetti.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Claire Robinson</p>
            <h4 class="article-title">Our invite-only Beta accounts are now live!</h4>
            <p class="h-16 article-text">{{ maxLength(`After a lot of hard work by the whole team,
              we’re excited to launch our closed beta. It’s easy to request an invite through the site`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <footer
      class="py-[3rem] m:py-[2rem] m:h-[40rem] bg-dark-blue text-white flex justify-between m:flex-col m:justify-center m:items-center">
      <div class="flex flex-col space-y-14 m:mb-10 m:space-y-10 m:items-center">
        <img src="../assets/images/logo-white.svg" alt="" class="logo">
        <div class="flex justify-between w-[165px]">
          <svg class="media-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path
              d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
          </svg>
          <svg class="media-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20">
            <path
              d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
          </svg>
          <svg class="media-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="18">
            <path
              d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
          </svg>
          <svg class="media-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path
              d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
          </svg>
          <svg class="media-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20">
            <path
              d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
          </svg>
        </div>
      </div>
      <div class="footer-links">
        <p>About Us</p>
        <p>Careers</p>
        <p>Contact</p>
        <p>Support</p>
        <p>Blog</p>
        <p>Privacy Policy</p>
      </div>
      <div class="flex flex-col items-end space-y-6 m:mt-8 m:items-center">
        <div class="bg-white w-fit h-fit rounded-full">
          <button class="invite-button">Request Invite</button>
        </div>
        <p class="text-grayish-blue text-sm">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import mobileModal from '../components/mobileModal.vue';

const windowWidth = ref(window.innerWidth)
const onResize = () => windowWidth.value = window.innerWidth
window.addEventListener('resize', onResize)

const modalOpen = ref(false)
watchEffect(() => {
  if (windowWidth.value > 759) {
    modalOpen.value = false
  }
  console.log(modalOpen.value)
})


function maxLength(str) {
  const maxLength = 122
  return (str.length > maxLength) ? str.slice(0, str.length) + `\u00A0…` : str;
}

</script>

<style></style>