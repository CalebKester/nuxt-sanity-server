<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink> <NuxtLink to="/about">About</NuxtLink>
    <br />
    Wildcard page: {{ $route.params.id }}
  </div>
</template>
