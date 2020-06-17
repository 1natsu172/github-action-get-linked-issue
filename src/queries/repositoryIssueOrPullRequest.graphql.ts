export const repositoryIssueOrPullRequest = `
  query repositoryIssueOrPullRequest($name: String!, $owner: String!, $issueOrPullRequestNumber: Int!) {
    repository(name: $name, owner: $owner) {
      issueOrPullRequest(number: $issueOrPullRequestNumber) {
        ... on PullRequest {
          __typename
          id
          number
        }
        ... on Issue {
          __typename
          id
          number
        }
      }
    }
  }
`
