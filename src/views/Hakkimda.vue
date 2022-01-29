<template>
  <div class="box">

    <div id="Egitim">
      <section>
        <div>
          <h1>Eğitim Bilgilerim</h1>
          <ol>
            <li>{{Egitim.bilgi1}}</li>
            <li>{{Egitim.bilgi2}}</li>
          </ol>
        </div>
      </section>
    </div>
  </div>

    <h1>Hakkımda</h1>
    <div id="Hobiler">
      <section>
        <div>
          <h1>Hobilerim</h1>
          <ol>
            <li>{{hobi.hobim1}}</li>
            <li>{{hobi.hobim2}}</li>
            <li>{{hobi.hobim3}}</li>
          </ol>
        </div>
      </section>
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        Egitim:{
          bilgi1: 'Hüseyin Ağırman Teknik Lisesi Veri Tabanı Programcılığı',
          bilgi2: 'Maltepe Üniversitesi Bilgisayar Programcılığı 2. Sınıf',
        },
        hobi:{
          hobim1: 'Seyahat Etmek',
          hobim2: 'Fotoğrafçılık',
          hobim3: 'Basketbol Oynamak (koronadan dolayı 2 yıl oynayamadım)'
          },        
      }
    },
  }
</script>

<style>
    
    </style>