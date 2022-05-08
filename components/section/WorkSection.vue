<template>
  <section id="work-section">
    <h3 id="works">Works</h3>
    <div class="work-detail blue-glass">
      <v-card class="work-element">
        <a href="https://2021.eeic.jp/" target="_blank" rel="noopener noreferrer">
          <figure class="work-img">
            <img contain src="@/assets/img/eeic-mayfes.png" />
            <figcaption>近未来体験 2021</figcaption>
          </figure>
        </a>
        <div class="work-description">
          「ゲームAI」や「謎解き」企画のシステム作成などに関わりました
        </div>
      </v-card>
      <v-card class="work-element">
        <a href="https://github.com/usagrada/satysfi-formatter" target="_blank" rel="noopener noreferrer">
          <figure class="work-img">
            <img contain src="@/assets/img/satysfi-fmt.jpeg" />
            <!-- <figcaption>SATySFi formatter</figcaption> -->
          </figure>
        </a>
        <div class="work-description">
          formatter の実装を行いました
        </div>
      </v-card>
      <!-- <v-card class="work-element">
        <a href="https://book-diary.vercel.app" target="_blank" rel="noopener noreferrer">
          <figure class="work-img">
            <img contain src="@/assets/img/book-diary.png" />
            <figcaption>Book Diary</figcaption>
          </figure>
        </a>
        <div class="work-description">
          本の管理システムを作成しました
        </div>
      </v-card> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work-img img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  margin: 0;
  align-items: center;
}

#work-section {
  .work-detail {
    display: flex;
    flex-wrap: wrap;
  }

  .work-element {
    @media screen and (min-width: 769px) {
      width: 45%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    margin: 10px;
    /* padding: 0 0 10% 0; */
    pointer-events: none;
    .work-img {
      position: relative;
      pointer-events: auto;
      &:hover img {
        filter: blur(3px);
      }
      figcaption {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      &:hover figcaption {
        display: block;
        font-size: 18px;
        color: white;
      }
    }
  }
}

.work-description {
  padding: 10px;
  font-size: 12px;
}
</style>