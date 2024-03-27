export default defineEventHandler(async (event) => {
  const query = groq`*[_type == 'page' && defined(slug)]{
		_id,
		title,
		'url': '/' + slug.current,
	}`;

  const sanity = useSanity();

  const data = await sanity.fetch(query);

  return data;
});
