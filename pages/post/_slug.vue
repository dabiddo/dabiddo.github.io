<template>
    <div>
        <h2 v-if="loading > 0">
          Loading...
    </h2>
    <v-app light v-else>
    <v-toolbar class="white">
      <v-toolbar-title v-text="post.title"></v-toolbar-title>
    </v-toolbar>  
    <v-content>
      <section>
        <v-parallax v-if="post.coverurl == null || post.coverurl == ''"  height="300" :src="`https://media.graphcms.com/${post.coverImage.handle}`">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          ></v-layout>
        </v-parallax>
        <v-parallax v-else :src="`${post.coverurl}`" height="300">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-flex  xs12>
            <v-container>
                <h3>{{post.createdAt}}</h3>
                <section>
                    <vue-markdown>{{post.content}}</vue-markdown>
                </section>
            </v-container>
        </v-flex>
      </section>
    </v-content>
  </v-app>
        
    </div>
</template>
<script>
import gql from 'graphql-tag'
import VueMarkdown from 'vue-markdown'
import vuex from 'vuex'

const post = gql`
    query post($slug: String!) {
      post: Post(slug: $slug) {
        id
        slug
        title
        coverurl
        coverImage {
          handle
          url
        }
        content
        dateAndTime
        createdAt
        tags
      }
    }
  `

export default {
    name: 'PostPage',
    layout: 'post',
    data: () => ({
      loading: 0,
      tags: [],
    }),
    apollo: {
      $loadingKey: 'loading',
      post: {
        query: post,
        variables () {
          return {
            slug: this.$route.params.slug
          }
        },
      }
    },
    components: { VueMarkdown }
  }
</script>
