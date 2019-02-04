<template>
  <div id="app" class="container">
    <h1 class="mb-4">Web</h1>
    <b-alert v-if="fin" show>Votre score est : {{ score }} / {{ questions.length }}</b-alert>
    <b-card :header="questions[index].question"
            header-tag="header">
      <b-list-group>
        <b-list-group-item
          button
          v-for="(item, index) in questions[index].answers"
          :key="item.id"
          @click="action(index)"
          :variant="variants[index]">
          {{ item }}
        </b-list-group-item>
      </b-list-group>
      <b-button v-if="fin" @click="recommencer" class="mt-4">Recommencer !</b-button>
      <b-button v-if="voirReponse && !fin" @click="continuer" class="mt-4">NEXT</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Geometrie',
  data: function () {
    return {
      fin: false,
      index: 0,
      score: 0,
      variants: [...Array(4)],
      voirReponse: false,
      questions: [
        {
             "question": "CSS est l'abréviation de Computed Style Sheets",
          answers: [
            'vrai',
            'faux'


          ],
          ok: 1
        },
        {
        "question": "Quelle est l'extension de fichier de type image ?",
          answers: [
            'zip',
            'png',
            'xls'

          ],
          ok: 1
        }

    }
  },
  methods: {
    action: function(index) {
      // Test bonne réponse
      if(index == this.questions[this.index].ok) {
        this.score++;
      } else {
        this.variants[index] = 'danger';
      }
      this.voirReponse = true;
      this.variants[this.questions[this.index].ok] = 'success';
      if(this.index == this.questions.length - 1) {
        this.fin = true;
      }
    },
    recommencer: function() {
      this.voirReponse = this.fin = this.index = this.score = 0;
      this.variants = [...Array(4)];
    },
    continuer: function() {
      this.voirReponse = false;
      this.variants = [...Array(4)];
      this.index++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Gadugi', Verdana, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
