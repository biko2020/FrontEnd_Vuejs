<template>
    <div class="block-header">
        <div class="logo">My Logo</div>
        <ul id="nav">
            <router-link to="/" tag="li">
                <a>Home</a>
            </router-link> |
            <router-link to="/about" tag="li">
                <a>About</a>
            </router-link> |
            <router-link to="/help" tag="li" replace>
                <a>Help</a>
            </router-link> |

            <router-link to="/calandrier" tag="li">
                <a>Calandrier</a>
            </router-link>
        </ul>
    </div>
</template>

<script>

export default {
    name:'AppHeader'

}
</script>
