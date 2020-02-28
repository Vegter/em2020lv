<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <h2>Les Suffrages</h2>
        <v-card
                class="mx-auto"
                tile
        >
          <v-row class="mr-2 ml-2">
            <v-col v-for="list in listes" :key="list.name" md="4" cols="12">
              <div class="text-cente">
                <v-img class="center" :src="require(`../assets/${list.name}.jpg`)" width="45" height="45"></v-img>
                Liste {{list.name}}
                <span v-if="list.percentage < 0.05"></span>
                <span v-else-if="results.winner" class="text-no-wrap">
                  ({{list.prime + list.seats + list.restSeats}} sièges)
                </span>
              </div>
              <v-text-field
                      class="mr-5 ml-5"
                      v-model="list.votes"
                      :rules="positive"
              ></v-text-field>
              <div>
                <v-btn class="float-left ml-5" tabindex="-1" @click="addVote(list, -1)">-</v-btn>
                <v-btn class="float-right mr-5" tabindex="-1" @click="addVote(list, 1)">+</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>

      <v-flex class="mt-5 mb-5">
        <v-btn @click="calcul()">Estimation</v-btn>
      </v-flex>

      <v-flex xs12 v-if="results.error">
        <v-card
                class="mx-auto mb-2"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">{{results.error}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 v-else-if="results.winner">
        <v-card
                class="mx-auto mb-2"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Sièges et Suffrages</h3>
            <div>
              {{results.totalSeats}} sièges à attribuer
            </div>
            <div>
              {{results.totalVotes}} suffrages exprimés, donc une majorité absolue de ({{results.totalVotes}}/2) + 1 = {{results.absoluteMajority}} voix
            </div>
          </v-card-text>
        </v-card>

        <v-card
                class="mx-auto mb-2"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Seuil électoral</h3>
            <p>
              Les sièges sont répartis à la représentation proportionnelle à la plus forte moyenne
              entre toutes les listes ayant obtenu plus de 5% ({{Math.ceil(results.totalVotes * 0.05)}}) des suffrages exprimés,
              en fonction du nombre de suffrage obtenus.
            </p>
            <div v-for="list in listes" :key="list.name">
              <h4>Liste {{list.name}}</h4>
              {{list.votes}} ({{(list.percentage * 100).toFixed(2)}}%)
            </div>
          </v-card-text>
        </v-card>

        <v-card
                class="mx-auto mb-2"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Prime Majoritaire</h3>
            <div>
              La prime majoritaire donne {{results.winner.prime}} sièges à la liste {{results.winner.name}}.
              Ce qui laisse {{results.remainingSeats}} sièges à pourvoir.
            </div>
          </v-card-text>
        </v-card>

        <v-card
                class="mx-auto mb-2"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Quotient électoral</h3>
            <div>
              On calcule le quotient électoral : {{results.totalVotes}}/{{results.remainingSeats}} = {{results.q.toFixed(2)}}
            </div>
          </v-card-text>
        </v-card>

        <v-card
                class="mx-auto mb-2"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Plus forte moyenne</h3>
            <div>
              Attribution à la plus forte moyenne pour chaque liste
            </div>
            <v-list-item v-for="list in results.lists" :key="list.name">
              <v-list-item-content>
                <v-row justify="center">
                  <v-col>
                    <h4>Liste {{list.name}}</h4>
                    <div>
                      Q: {{list.votes}}/{{results.q.toFixed(2)}} = {{list.avg.toFixed(2)}} soit {{list.seats}} sièges
                    </div>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <div>
              Ce qui laisse {{results.restSeats}} sièges à pourvoir.
            </div>
          </v-card-text>
        </v-card>

        <v-card
                class="mx-auto mb-2"
                tile
                v-for="(round, index) in results.restRounds"
                :key="index"
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Attribution du siège {{index + 1}}</h3>
            <div>
              Attribution à la plus forte moyenne pour chaque liste
            </div>
            <v-list-item v-for="list in results.lists" :key="list.name">
              <v-list-item-content>
                <v-row justify="center">
                  <v-col>
                    <h4>Liste {{list.name}}</h4>
                    <div>
                      Q: {{list.votes}}/{{list.rounds[index].roundSeats}} + 1 = {{list.rounds[index].avg.toFixed(2)}}
                    </div>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <div>
              On attribue 1 nouveau siège à la liste {{round.winner.name}} qui a la plus forte moyenne.
            </div>
          </v-card-text>
        </v-card>

        <v-card
                class="mx-auto"
                tile
        >
          <v-card-text>
            <h3 class="headline font-weight-bold mb-3">Resultats</h3>
            <div v-for="list in results.lists" :key="list.name">
              {{list.name}} {{list.prime + list.seats + list.restSeats}} sièges
            </div>
          </v-card-text>
        </v-card>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  const seats = 19;

  const listNames = ["Marignane", "Charrat", "Rogier"]

  const listes = listNames.map(name => ({name, votes: null}))

  function log(msg) {
    window.console.log(msg)
  }

  function setResult() {
    const results = {
      totalSeats: null,
      totalVotes: null,
      absoluteMajority: null,
      winner: null,
      remainingSeats: null,
      q: null,
      lists: null,
      nRounds: null,
      restRounds: []
    };

    results.winner = null
    results.error = null
    results.calculated = true

    listes.forEach(list => list.votes = parseInt(list.votes));

    let totalVotes = 0;
    listes.forEach(list => totalVotes += list.votes);

    // Phase 1, >= 5%
    listes.forEach(list => {
      list.percentage = list.votes / totalVotes
    });

    let allLists = listes.slice();
    let lists = allLists.filter(list => list.percentage >= 0.05);

    const maxVotes = Math.max(...lists.map(list => list.votes));

    const winners = lists.filter(list => list.votes === maxVotes)
    if (winners.length > 1) {
      log("NO WINNER")
      results.winner = null
      results.error = "Le résultat est indéterminé"
      return results
    }

    const winner = winners[0];
    const majorityPrime = Math.round(seats / 2)
    winner.prime = majorityPrime
    lists.forEach(list => {
      list.isWinner = list === winner;
      list.prime = list === winner ? majorityPrime : 0;
    });

    const remainingSeats = seats - majorityPrime;

    const q = totalVotes / remainingSeats;

    let restSeats = remainingSeats
    lists.forEach(list => {
      list.avg = list.votes / q
      list.seats = Math.trunc(list.avg)
      restSeats -= list.seats
    })

    let restRounds = new Array(restSeats)

    lists.forEach(list => {
      list.rounds = new Array(restSeats);
      list.restSeats = 0
    })

    const nRounds = restSeats;
    let i = 0
    while (i < restSeats) {
      lists.forEach(list => {
        const roundSeats = list.seats + list.restSeats
        list.rounds[i] = {
          roundSeats,
          avg: list.votes / (roundSeats + 1)
        }
      });
      const maxAvg = Math.max(...lists.map(list => list.rounds[i].avg));
      let winners = lists.filter(list => list.rounds[i].avg === maxAvg);
      if (winners.length > 1) {
        const maxVotes = Math.max(...winners.map(winner => winner.votes))
        winners = winners.filter(winner => winner.votes === maxVotes)
        if (winners.length > 1) {
          log("UNKNOWN LAST RESTSEAT")
          results.winner = null
          results.error = "Attribution des sièges restants est indéterminé"
          return results
        }
      }
      restRounds[i] = {
        winner: winners[0]
      }
      const winner = winners[0]
      lists.forEach(list => {
        list.rounds[i].isWinner = list === winner
        list.rounds[i].seats = list === winner ? 1 : 0
      })
      winner.restSeats += 1
      i++;
    }
    log(lists)

    results.totalSeats = seats,
    results.totalVotes = totalVotes
    results.absoluteMajority = Math.trunc(totalVotes / 2 + 1),
    results.winner = winner
    results.remainingSeats = remainingSeats
    results.restSeats = restSeats
    results.q = q
    results.lists = lists
    results.restRounds = restRounds
    results.nRounds = nRounds

    return results
  }

  export default {
  name: 'Elections',

  data: () => ({
    positive: [
      v => !isNaN(parseInt(v)) || 'valeur invalide',
      v => parseInt(v) >= 0 || 'value negative'
    ],
    listes,
    seats,
    results: {}
  }),
  watch: {
    listes: {
      handler() {
        this.recalc();
      },
      deep: true
    }
  },
  methods: {
    addVote(list, v) {
      this.parseVotes(list)
      list.votes += v
      this.$forceUpdate()
    },

    parseVotes(list) {
      list.votes = parseInt(list.votes)
      if (!list.votes || isNaN(list.votes)) {
        list.votes = 0
      }
    },

    recalc() {
      if (this.results.calculated) {
        this.calcul()
      }
    },

    calcul() {
      listes.forEach(list => this.parseVotes(list))
      this.results = setResult();
    },
  }
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 50%;
}
</style>
