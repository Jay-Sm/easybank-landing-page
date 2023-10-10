<template>
  <div>
    <header class="absolute top-0 left-0 right-0 h-[5rem] bg-white z-20 flex items-center justify-between">
      <img src="../assets/images/logo.svg" alt="easybank logo" class="h-6">
      <nav class="flex space-x-8 text-grayish-blue ml-2">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Blog</button>
        <button>Careers</button>
      </nav>
      <button class="invite-button ml-2">Request Invite</button>
    </header>

    <section class="flex flex-row pl-[7rem] overflow-hidden">
      <div class="w-[40%] h-[44rem] flex flex-col justify-center space-y-[2rem]">
        <h1 class="text-5xl font-300 w-[23rem]">Next generation digital banking</h1>
        <p class="text-grayish-blue w-[25rem]">
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting,
          investing, and much more.
        </p>
        <button class="invite-button">Request Invite</button>
      </div>
      <div class="relative w-[60%] h-[46rem]">
        <div class="overflow-hidden w-full h-full">
          <img src="../assets/images/bg-intro-desktop.svg"
            class="relative min-w-[80.1rem] -top-[11.5rem] -left-[0rem] pointer-events-none">
        </div>
      </div>
      <img src="../assets/images/image-mockups.png" class="absolute z-10 top-[3rem] right-[0rem] min-w-[39rem] w-[39rem]">
    </section>

    <section class="bg-light-grayish-blue z-0 py-[6rem] flex flex-col justify-center items-center space-y-16">
      <div class="flex flex-col space-y-6 w-full">
        <h2>Why choose Easybank?</h2>
        <p class="w-[35.5rem] text-grayish-blue">We leverage Open Banking to turn your bank account into your financial
          hub. Control
          your finances like never before.</p>
      </div>

      <div class="flex justify-between w-full space-x-4">
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

      <h2>Latest Articles</h2>

      <div class="flex justify-between">
        <div class="inline-block w-[14.7rem]">
          <img src="../assets/images/image-currency.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Claire Robinson</p>
            <h4 class="article-title">Receive money in any currency with no fees</h4>
            <p class="h-16 article-text">
              {{ maxLength(`The world is getting smaller and we’re becoming more mobile. So why should you be forced to
              only receive money in a single`) }}</p>
          </div>
        </div>
        <div class="inline-block w-[14.7rem]">
          <img src="../assets/images/image-restaurant.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Wilson Hutton</p>
            <h4 class="article-title">Treat yourself without worrying about money</h4>
            <p class="h-16 article-text">{{ maxLength(`Our simple budgeting feature allows you to
              separate out your spending and set realistic limits each month. That means you`) }}</p>
          </div>
        </div>
        <div class="inline-block w-[14.7rem]">
          <img src="../assets/images/image-plane.jpg" class="thumbnail">
          <div class="article-info">
            <p class="article-text">By Wilson Hutton</p>
            <h4 class="article-title">Take your Easybank card wherever you go</h4>
            <p class="h-16 article-text">{{ maxLength(`We want you to enjoy your travels. This is
              why we don’t charge any fees on purchases while you’re abroad. We’ll even show you`) }}</p>
          </div>
        </div>
        <div class="inline-block w-[14.7rem]">
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

    <footer class="py-[3rem]  bg-dark-blue text-white flex">
      <div>
        <img src="../assets/images/logo-white.svg" alt="" class="">
        <div class="flex justify-between">
          <img src="../assets/images/icon-facebook.svg" alt="">
          <img src="../assets/images/icon-youtube.svg" alt="">
          <img src="../assets/images/icon-twitter.svg" alt="">
          <img src="../assets/images/icon-pinterest.svg" alt="">
          <img src="../assets/images/icon-instagram.svg" alt="">
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
  </div>
</template>

<script setup>

function maxLength(str) {
  const maxLength = 122
  return (str.length > maxLength) ? str.slice(0, str.length) + `\u00A0…` : str;
}

</script>

<style></style>