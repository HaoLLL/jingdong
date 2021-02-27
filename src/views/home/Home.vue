<template>
  <div>
    <div class="wrapper">
      <StaticPart />
      <Nearby />
    </div>
    <Docker />
  </div>

</template>
<script>
import StaticPart from './StaticPart'
import Docker from './Docker'
import Nearby from './Nearby'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Docker,
    Nearby
  }
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
</style>
