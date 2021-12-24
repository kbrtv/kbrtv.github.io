<template>
  <div>
    <b-carousel
      id="carousel-1"
      class="carousel"
      v-model="slide"
      controls
      :interval="0"
      fade
      indicators
      label-next
      label-prev
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class="bg-success"
        caption="FINAL PROJECT PRESENTATION"
        text="INF-231: Web programming: front end"
        img-blank
      >
        <div>
            <b-card class="text-center bg-light text-light card">
                <div class="first" 
                    v-for="item in firstData" :key="item.text">
                    <span style="font-size: 35px;">{{item.text}}</span>
                </div>
            </b-card>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        class="bg-success"
        caption="INTRODUCTION"
        text="WHAT IS THIS SITE FOR?"
        img-blank
      >
        <div>
            <b-card class="bg-light text-light card">
                <div v-for="item in secondData" :key="item.text" style="color: teal; text-align: center; padding-top: 30px;">
                    <span style="font-size: 35px;">{{item.text}}</span>
                </div>
            </b-card>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        class="bg-success"
        caption="Intended Audience"
        text="Who will be interested in this product?"
        img-blank
      >
        <div>
            <b-card class="text-center bg-light text-light card">
                <div  v-for="item in thirdData" :key="item.text" 
                        style="color: teal; text-align: center; padding-top: 10px;">
                    <span style="font-size: 25px;">
                        {{item.text}}
                    </span>
                </div>
            </b-card>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        class="bg-success"
        caption="Functional Requirements"
        text="What can it do in terms of functionality?"
        img-blank
      >
        <div>
            <b-card class="text-center bg-light text-light card">
                <div v-for="item in fourthData" :key="item.text" style="color: teal; text-align: center;">
                    <span style="font-size: 30px;">{{item.text}}</span>
                </div>
            </b-card>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        class="bg-success"
        caption="Non functional Requirements"
        img-blank
      >
        <div>
            <b-card class="text-center bg-light text-light card">
                <div v-for="item in fifthData" :key="item.text" style="color: teal; text-align: center;">
                    <span style="font-size: 30px;">{{item.text}}</span>
                </div>
            </b-card>
        </div>
      </b-carousel-slide>

      <b-carousel-slide
        class="bg-success"
        caption="THE END"
        img-blank
      >
        <div>
            <b-card class="text-center bg-light text-light card" style="padding: 70px;">
                <div style="color: teal; text-align: center;">
                    <span style="font-size: 40px;">That's all, thank you all for your attention!</span>
                </div>
                <div>
                    <a href="https://kbrtv.github.io/index" style="font-size: 40px;">Click on me to go to the site</a>
                </div>
            </b-card>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
      return {
        slide: 0,
        sliding: null,
        firstData: [
            { text: 'Team name: ZXC' },
            { text: 'Developer: Burkitbay Kami' },
            { text: 'Project: Smart watches' },
        ],
        secondData: [
            { text: '1. Advertising' },
            { text: '2. Selling a product' },
            { text: '3. Customer convenience' },
            { text: '4. Switching to distance selling' }
        ],
        thirdData: [
            { text: 'This product is intended for all people who want to take care of their health and somehow associate themselves with sports.' },
            { text: '1. Professional runners' },
            { text: '2. Amateur jogging' },
            { text: '3. Race walking' },
            { text: '4. Cyclists' },
            { text: '5. Fitness' }
        ],
        fourthData: [
            { text: '1. Business rules' },
            { text: '2. Formation of applications for feedback' },
            { text: '3. Consultation Form' },
            { text: '4. Interactive slider for viewing products' },
            { text: '5. Tabs for selecting products by industry' },
            { text: '6. The function of purchasing goods by filling out a preliminary application' },
            { text: '7. Interactive map to view the location of the store' }
        ],
        fifthData: [
            { text: '1. Usability: user-friendly interface, nice design, easy to get information about the product, feedback, consultation, easy to view the list of products in the catalog and purchase the product.' },
            { text: '2. Representation: provides detailed information about the company, the advantages of the company and their products, contact numbers and consultations, product information, customer reviews.' }
        ],
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.carousel {
    text-shadow: 1px 1px 2px #333;
}
.card {
    width: 900px; 
    height: 400px; 
    opacity: 0.7;
}
.first {
    color: teal; 
    display: flex; 
    justify-content: center; 
    flex-direction: column; 
    padding-top: 50px;
}
</style>