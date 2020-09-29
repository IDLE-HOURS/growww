import sanityClient from '@sanity/client';

// create instance of sanityClient
// this is how you connect your frontend to your sanity studio
const client = sanityClient({
    projectId: 'a6uv2qns',
    dataset: 'production',
    token: '', // or leave blank to be anonymous user
    useCdn: true // `false` if you want to ensure fresh data
})

export { client };