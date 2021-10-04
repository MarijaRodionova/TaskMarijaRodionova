Feature: Registration page

    Scenario Outline: As a user, I can successfully register my account

        Given I am on the registration page
        When I enter mandatory fields <firstmame>, <lastname>, <email>, <telephone>, <password>, <passwordConfirm>
        When I check Pricacy Policy Checkbox
        When I click on "Continue" button
        Then I should see a message saying <Message>

        Examples:
            | firstname | lastname | email         | telephone | password | passwordConfirm | message                        |
            | tomsmith  | Mith     | mith@mith.com | 222333444 | 111222   | 111222          | Your Account Has Been Created! |