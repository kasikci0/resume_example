<template>

  <div>

    <section>
    <h1>Beceriler</h1>
    </section>

<div id="veri">

    <section>
      <h1>Veri</h1>
      <ol class="ul">
        <li class="li">{{veri.veri}}</li> 
      </ol>
    </section>

</div>

    <section>
      <h1>Yabancı Dil</h1>
      <p>İngilizce: Orta seviye</p>
    </section>    

    <section>
      <h1>Programlama Dilleri</h1>
      <ol class="ul">
        <li class="li">{{diller.dil1}}</li>
        <li class="li">{{diller.dil2}}</li>
        <li class="li">{{diller.dil3}}</li>
        <li class="li">{{diller.dil4}}</li>
      </ol>
    </section>

    
  </div>

</template>

<script>
  export default {
    data() {
      return {
        veri:{
          veri: 'SQL Managment Stuido',
        },
        diller:{
          dil1: 'Java',
          dil2: 'C++',
          dil3: 'JavaScript',
          dil4: 'Vue.JS',
        },
      }
    },
  }
</script>

