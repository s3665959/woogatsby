const SeoFragment = `
fragment SeoFragment on WpSEOConfig {
	  canonical
	  title
	  metaDesc
	  metaRobotsNoindex
	  metaRobotsNofollow
	  opengraphAuthor
	  opengraphDescription
	  opengraphTitle
	  opengraphDescription
	  opengraphImage {
	    sourceUrl
	  }
	  opengraphUrl
	  opengraphSiteName
	  opengraphPublishedTime
	  opengraphModifiedTime
	  twitterTitle
	  twitterDescription
}
`;

module.exports.SeoFragment = SeoFragment;