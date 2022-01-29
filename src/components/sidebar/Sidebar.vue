  <template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-align-justify" />
    </span>
    <h2></h2>

    <SidebarLink to="/" icon="fas fa-home" title="Ana Sayfa">Ana Sayfa</SidebarLink>
    <SidebarLink to="/hakkimda" icon="far fa-address-card" title="Hakkımda">Hakkimda</SidebarLink>
    <SidebarLink to="/beceriler" icon="far fa-keyboard" title="Becerilerim">Beceriler</SidebarLink>
  </div>
</template>
  
<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>


<style>
:root {
  --sidebar-bg-color: #1305db;
  --sidebar-item-hover: #3a2df3;
  --sidebar-item-active: #0c0386;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  top: 0;
  /* bottom: 0; */
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
