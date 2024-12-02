Feature: Testing the Agify API for Name

  Scenario: Valid name provided
    Given I provide the name "billybob" to the API
    Then the response should be 200 and contain the correct JSON structure
    And the name should be "billybob"
    And the age should be "59"

  Scenario: Name with special characters
    Given the API is accessible
    When I provide the name "billy's" to the API
    Then the name should be "billy's"
    And the age should be "42"

  Scenario: No name provided
    Given I provide the name "" to the API
    Then the response should be 200 and contain the correct JSON structure
    And the name should be ""
    And the age should be "null"
