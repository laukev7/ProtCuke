Feature: Example feature

  Scenario Outline: Wanderlust App
    Given I am on the Wanderlust website
    When I search for city "<destination>"
    Then I should see a results dropdown
    And I should get <num> results

    Examples:
      | destination | num |
      | berlin      | 5   |
      | montreal    | 5   |
      | timbuktu    | 1   |
      | gdansk      | 4   |
      | fdsafr      | 0   |