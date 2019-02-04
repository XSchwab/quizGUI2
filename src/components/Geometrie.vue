<template>
  <div id="app" class="container">
    <h1 class="mb-4">Géométrie</h1>
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
           "question": "Combien de côtés possède un cube",
          answers: [
            '4',
            '6',
            '3',
            '32'
          ],
          ok: 1
        },
        {
         "question": "Combien de côtés possède une pyramide",
          answers: [
            '4',
            '5',
            '6',
            '7'
          ],
          ok: 0
        },
        {
                     "question": "Combien de sommets possède un dodecaèdre",
                                     answers: [
                                       '12',
                                       '18',
                                       '20',
                                       '24'
                                     ],
                                     ok: 2
                                   },
                                    {
                                           "question": "Combien de sommets possède un cube",
                                             answers: [
                                               '4',
                                               '6',
                                               '8',
                                               '12'
                                             ],
                                             ok: 2
                                           }
      ]
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
