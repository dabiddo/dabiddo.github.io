<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax src="https://wallpaperscraft.com/image/starry_sky_milky_way_stars_glitter_space_118653_1920x1080.jpg" height="500">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="https://media.graphcms.com/resize=w:100,h:100,fit:crop/uW74qvaCT5CNACStCCTo" alt="dabiddo" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">DABIDDO's Blog</h1>
            <div class="subheading mb-3 text-xs-center">Just a developer</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <nuxt/>
      </section>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data:()=>({
    title:"dabiddo.net"
  })
}
</script>

