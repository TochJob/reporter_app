<script setup lang="ts"></script>

<template>
  <div class="flipper">
    <div class="front-card card">
      <slot name="front"></slot>
    </div>
    <div class="back-card card">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flipper {
  position: relative;
  width: 545px;
}

.flipper {
  perspective: 600px;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;

  -webkit-transform-origin: 100% center;
  -moz-transform-origin: 100% center;
  -ms-transform-origin: 100% center;
  transform-origin: 100% center;
}

.front-card,
.back-card {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;

  -o-transition: transform 0.6s ease-in-out;
  -moz-transition: transform 0.6s ease-in-out;
  -webkit-transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;

  position: absolute;
  top: 0;
  left: 0;
}

.front-card {
  z-index: 2;
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.flipper.flip .front-card {
  -webkit-transform: rotateX(180deg);
  -moz-transform: rotateX(180deg);
  transform: rotateX(180deg);
}

.back-card {
  -webkit-transform: rotateX(-180deg);
  -moz-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
}

.flipper.flip .back-card {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

/*Styling*/
.header-front {
  background: SteelBlue;
}

.header-back {
  background: YellowGreen;
}

.card {
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  background-clip: padding-box;
  box-shadow:
    0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
