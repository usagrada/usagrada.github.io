<template>
  <section id="skills-section">
    <h3 id="skills">Skills</h3>

    <div class="skill-flex">
      <article id="frontend-article" class="blue-glass my-article">
        <!-- frontend -->
        <h4>Front-end</h4>
        <div
          v-for="skill in skills.frontend"
          :key="skill.name"
          class="skill-names"
        >
          <div id="skill-name" class="skill-name">
            <v-icon color="green"> {{ skill.icon }} </v-icon>
            {{ skill.name }}
          </div>
          <!-- <div>prefer</div> -->
        </div>
      </article>

      <article id="backend-article" class="blue-glass my-article">
        <!-- backend -->
        <h4>Back-end</h4>
        <div
          v-for="skill in skills.backend"
          :key="skill.name"
          class="skill-names"
        >
          <div id="back-skill-name" class="skill-name">
            <v-icon color="green"> {{ skill.icon }} </v-icon>
            {{ skill.name }}
            <div class="frameworks">{{ skill.framework.join(' / ') }}</div>
          </div>
        </div>
      </article>

      <article id="misc-article" class="blue-glass my-article">
        <!-- misc -->
        <h4>Misc</h4>
        <div v-for="skill in skills.misc" :key="skill.name" class="skill-names">
          <div id="misc-skill-name" class="skill-name">
            <v-icon color="green"> {{ skill.icon }} </v-icon>
            {{ skill.name }}
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        frontend: [
          {
            name: 'HTML / CSS',
            icon: 'fas fa-code',
          },
          { name: 'React / Next.JS', icon: 'mdi-react' },
          { name: 'NuxtJS', icon: 'mdi-nuxt' },
          { name: 'Yew', icon: 'mdi-language-rust' },
        ],
        backend: [
          {
            name: 'Node.JS',
            framework: ['Express', 'NestJS'],
            icon: 'fab fa-node',
          },
          {
            name: 'Python',
            framework: ['Django'],
            icon: 'mdi-language-python',
          },
          {
            name: 'Go',
            framework: ['Echo', 'Fiber', 'Revel'],
            icon: 'mdi-language-go',
          },
          { name: 'Rust', framework: ['Actix'], icon: 'mdi-language-rust' },
          {
            name: 'SQL',
            framework: ['MySQL', 'PostgreSQL'],
            icon: 'mdi-database',
          },
          {
            name: 'NoSQL',
            framework: ['MongoDB', 'Redis'],
            icon: 'mdi-database',
          },
        ],
        misc: [
          { name: 'git', icon: 'mdi-git' },
          {
            name: 'docker',

            icon: 'mdi-docker',
          },
          { name: 'firebase', icon: 'mdi-firebase' },
          { name: 'websocket', icon: '' },
        ],
      },
    }
  },
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 701px) {
  .skill-flex {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;

    #frontend-article {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    #backend-article {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }
    #misc-article {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }
}

.my-article {
  padding: 15px;
  h4 {
    padding-bottom: 15px;
  }
}

.skill-names {
  padding-bottom: 10px;
}

.skill-name {
  .frameworks {
    padding: 5px 10px;
    font-size: 10px;
  }
  i {
    width: 24px;
    margin-right: 5px;
  }
}
</style>
