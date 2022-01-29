<template>
  <div class="anaSayfa">    
      <GirisSayfasi msg="Bilgisayar Programcılığı Final Sınavı" />    
    <img id="img" alt="me" src="../assets/me.jpg" style="height:500px" />   
  </div>
</template>

<script>
// @ -> /src klasörünü işaret eder
import GirisSayfasi from '@/components/AnaSayfa.vue'

export default {
  name: 'AnaSayfa',
  components: {
    GirisSayfasi, 
  }
}
</script>
