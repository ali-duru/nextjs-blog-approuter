import graphqlRequest from './graphqlRequest';

export async function getSeo(pageType = 'post', slug = '') {
	const query = {
		query: `query getSeo {
            post(id: "", idType: SLUG) {
              seo {
                opengraphImage {
                  mediaItemUrl
                }
                opengraphModifiedTime
                opengraphPublishedTime
                opengraphTitle
                opengraphType
                opengraphUrl
                schema {
                  raw
                }
                title
                metaDesc
                opengraphSiteName
                readingTime
                opengraphPublisher
              }
              author {
                node {
                  firstName
                }
              }
            }
          }`,
	};

	const getSeo = await graphqlRequest(query);
	const seoData = getSeo.data['post'].seo;

	console.log('seodata...');
	console.log(seoData.opengraphImage.mediaItemUrl);

	return seoData;
}
