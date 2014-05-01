
#include "stdafx.h"
#include "rockpaperscissors.h"

void start() {

	printf("Hello, let's start.\n");
	while (true) {

		printf("Choose Rock (R) Paper (P) or Scissors (S)...");
		char choice = 0;
		char fullChoice[10];

		scanf(" %c", &choice);

		if (choice == 'R' || choice == 'r') {
			sprintf_s(fullChoice, "Rock");
		}
		else if (choice == 'P' || choice == 'p') {
			sprintf_s(fullChoice, "Paper");
		}
		else if (choice == 'S' || choice == 's') {
			sprintf_s(fullChoice, "Scissors");
		}
		else {
			printf("I'm really not sure what that is, so I guess I win.\n");
			printf("I'll let you play again though\n");
			continue;
		}


		printf("I choose Rock!\n");


		//calc what to use against current values

		//store choice against current values

		printf("You chose %s, and I chose Rock\n", fullChoice);
		printf("I guess you win this time. Again?\n");
	}
}

