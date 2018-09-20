<template>
<v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Latest posts</h2>
            </div>
          </v-flex>
          
            <v-container grid-list-xl>
              <v-layout wrap align-center>
                <v-flex xs12 md4 v-model="posts" v-for="post in posts" :key="post.id">
                  <v-card>
                    <v-img v-if="post.coverurl == null || post.coverurl == ''" :src="`https://media.graphcms.com/${post.coverImage.handle}`"
                      aspect-ratio="1.75"
                    ></v-img>

                    <v-img v-else :src="`${post.coverurl}`"
                      aspect-ratio="1.75"
                    ></v-img>

                      <v-card-title primary-title>
                        <div>
                          <h5 class="headline mb-0">{{ post.title | titleTruncate }}</h5>
                          <div>{{ post.content | truncate }}</div>
                        </div>
                      </v-card-title>

                      <v-card-actions>
                        <v-btn flat color="blue" nuxt :to="`/post/${post.slug}`" >Read</v-btn>
                        <!--<v-btn flat color="orange">Share</v-btn> -->
                      </v-card-actions>
                    </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          
          <v-btn
            fab
            bottom
            right
            color="pink"
            dark
          >
            <v-icon>add</v-icon>
          </v-btn>
        </v-layout>
</template>
<script>
import gql from 'graphql-tag'
import graphql from 'apollo-client'

const fetchAllPosts = gql`
query allPosts {
  allPosts(orderBy:createdAt_DESC, first:6){
		id
		slug
		title
    content
    coverurl
		coverImage{
			fileName
      handle
		}
		createdAt
		dateAndTime
	}
}
`

export default {
  data: () => ({
    posts:[]
  }),
  mounted(){
    this.$nextTick(() => {
          this.$apollo.queries.allPosts.skip=false
          this.$apollo.queries.allPosts.refetch()
        })
 },
  apollo: {
    allPosts:{
      query: fetchAllPosts,
      manual:true,
      result(result){
        this.posts = result.data.allPosts
      },
      error(error){
        console.log(error)
      }
    }
  },
  methods: {
    allPosts: function(){
      //something
    }
  },
  filters: {
      truncate: function (value) {
        return value.substring(0, 45) + '...'
      },
      titleTruncate: function(value) {
        return value.substring(0, 20) + '...'
      }
    }
}
</script>


