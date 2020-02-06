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
            <v-col v-for="list in listes" :key="list.name" sm="4" cols="12">
              <div class="text-left">
                Liste {{list.name}}
                <span v-if="list.percentage < 0.05">
                </span>
                <span v-else-if="results.winner" class="text-no-wrap">
                  ({{list.prime + list.seats + list.restSeats}} sièges)
                </span>
              </div>
              <v-text-field
                      v-model="list.votes"
                      :rules="[]"
                      required
              ></v-text-field>
              <div>
                <v-btn @click="list.votes = parseInt(list.votes) + 1">+</v-btn>
                <v-btn @click="list.votes = parseInt(list.votes) - 1">-</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>

      <v-flex class="mt-5 mb-5">
        <v-btn @click="calcul()">Calcul</v-btn>
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

        <v-flex xs12 v-if="results.winner">
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



      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  const listes = [
    {
      name: "Marignane",
      votes: 301,
      isWinner: null,
      seats: 0,
      remaingSeats: 0,
      avg: 0
    },
    {
      name: "Charrat",
      votes: 300,
      isWinner: null,
      seats: 0,
      remaingSeats: 0,
      avg: 0
    },
    {
      name: "Rogier",
      votes: 299,
      isWinner: null,
      seats: 0,
      remaingSeats: 0,
      avg: 0
    }
  ];

  const seats = 19;
  const remaingSeats = 9;

  const votingResult = {
    q: null,
    totalVotes: null
  };

  function log(msg) {
    window.console.log(msg)
  }

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

  function setResult() {
    results.error = null

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
      results.error = "Aucun gagnant clair"
      return
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
        if (winners.length > 1 && i === restSeats - 1) {
          // unknown last restSeats
          log("UNKNOWN LAST RESTSEAT")
          return
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
  }

  function remains() {
    let remains = seats;
    for (let list of listes) {
      remains -= list.seats;
      remains -= list.remainingSeats;
    }
    return remains
  }

  function getTotalVotes() {
    let totalVotes = 0;
    for (let list of listes) {
      totalVotes += parseInt(list.votes);
    }
    return totalVotes;
  }

  function getAbsoluteMajority() {
    const totalVotes = getTotalVotes();
    return Math.trunc((totalVotes / 2) + 1);
  }

  function getMajorityPrime() {
    return Math.round(seats / 2)
  }

  function getRemainingSeats() {
    return seats - getMajorityPrime()
  }

  function getWinner() {
    let max = -1;
    let maxList = null;
    for (let list of listes) {
      if (list.votes > max) {
        max = list.votes;
        maxList = list;
      }
    }
    return maxList;
  }

  function getQ() {
    return getTotalVotes() / getRemainingSeats()
  }

  function getAverage(list) {
    const avg = list.votes / getQ();
    return [avg, Math.trunc(avg)];
  }

  function getRestSeats() {
    let restSeats = seats - getMajorityPrime();
    for (let list of listes) {
      restSeats -= getAverage(list)[1]
    }
    return restSeats
  }

  function getRestSeatsDivision() {
    const restLists = listes.slice()

    for (let list of restLists) {
      list.seats = 0
      if (list.name == getWinner().name) {
        list.seats += getMajorityPrime()
      }
      list.seats += getAverage(list)[1]
    }

    let restSeats = getRestSeats()
    while (restSeats > 0) {
      let maxQ = 0
      let maxList = null
      for (let list of restLists) {
        list.wins = false
        list.q = list.votes / (list.seats + 1)
        if (list.q > maxQ) {
          maxQ = list.q
          maxList = list
        }
      }
      maxList.wins = true
    }
    return restLists
  }

  export default {
  name: 'Elections',

  data: () => ({
    listes,
    seats,
    votingResult,
    remains,
    results,
    anything: null
  }),
  watch: {
    listes: {
      handler() {
        this.calcul();
      },
      deep: true
    }
  },
  methods: {
    getTotalVotes,
    getAbsoluteMajority,
    getMajorityPrime,
    getRemainingSeats,
    getWinner,
    getQ,
    getAverage,
    getRestSeats,
    getRestSeatsDivision,

    ttt() {
      this.anything = null
    },

    calcul: () => {
      setResult();
    },

    setQ: () => {
      let totalVotes = 0;
      for (let list of listes) {
        totalVotes += list.votes;
      }
      const q = totalVotes / remaingSeats;

      votingResult.totalVotes = totalVotes;
      votingResult.q = q;

      for (let list of listes) {
        list.remainingSeats = Math.trunc(list.votes / q);
      }

      while (remains() > 0) {
        let maxAvg = 0;
        let maxList = null;
        for (let list of listes) {
          list.avg = list.votes / (list.remainingSeats + 1);
          if (list.avg > maxAvg) {
            maxAvg = list.avg;
            maxList = list;
          }
        }
        maxList.remainingSeats += 1;
      }



      // for (list of listes)
    },
    majorityPrime: () => {
      let max = -1;
      let maxList = null;
      for (let list of listes) {
        if (list.votes > max) {
          max = list.votes;
          maxList = list;
        }
      }
      for (let list of listes) {
        if (list === maxList) {
          list.isWinner = true;
          list.seats = 10;
        } else {
          list.isWinner = false;
        }
      }
    },
    remainingSeats: () => {
      this.setQ();
    }
  }
};
</script>
