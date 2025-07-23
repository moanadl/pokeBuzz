import { render, screen, fireEvent, within } from "@testing-library/react";
import Form from "../components/Form";

describe('Form component', () => {

    describe ('given form not answered correctly', () => {

        test ("must display error message", () => {
            render(<Form />);

            const submitButton = screen.getByRole("button", { name: /Catch 'em!/i }); // Searches button using accessibility
            fireEvent.click(submitButton);

            const errorMessage = screen.getByText(/You need to select one option from the following questions:/i);
            expect(errorMessage).toBeInTheDocument();
        });

        test ("must indicate on screen which questions are missing answer", () => {
            render(<Form />);

            // Question 1: Choose a color
            fireEvent.click(screen.getByLabelText(/Black/i));

            // Question 2: Choose a transportation
            // -- No answer -- //

            // Question 3: Choose a setting
            fireEvent.click(screen.getByLabelText(/Mountain/i));

            // Question 4: Choose a natural phenomenon
            // -- No answer -- //

            // Question 5: Choose something to do
            fireEvent.click(screen.getByLabelText(/Hiking/i));

            // Question 6: Choose a place to chill
            // -- No answer -- //

            // Question 7: Choose a Taylor Swift album
            fireEvent.click(screen.getByLabelText(/Folklore/i));

            const submitButton = screen.getByRole("button", { name: /Catch 'em!/i }); 
            fireEvent.click(submitButton);

            const formErrors = screen.getByTestId('form-errors');

            // Unanswered questions must be indicated in the form-errors
            expect(within(formErrors).getByText(/Choose a transportation/i)).toBeInTheDocument();
            expect(within(formErrors).getByText(/Choose a natural phenomenon/i)).toBeInTheDocument();
            expect(within(formErrors).getByText(/Choose a place to chill/i)).toBeInTheDocument(); 

            // Answered questions must not be indicated in the form-errors
            expect(within(formErrors).queryByText(/Choose a color/i)).not.toBeInTheDocument();
            expect(within(formErrors).queryByText(/Choose a setting/i)).not.toBeInTheDocument();
            expect(within(formErrors).queryByText(/Choose something to do/i)).not.toBeInTheDocument();
            expect(within(formErrors).queryByText(/Choose a Taylor Swift album/i)).not.toBeInTheDocument();

        });

        test ("must display image of Snorlax indicating unanswered quetion on fieldset", () => {
            render(<Form />);

            // Question 1: Choose a color
            fireEvent.click(screen.getByLabelText(/Black/i));

            // Question 2: Choose a transportation
            // -- No answer -- //

            // Question 3: Choose a setting
            fireEvent.click(screen.getByLabelText(/Mountain/i));

            // Question 4: Choose a natural phenomenon
            // -- No answer -- //

            // Question 5: Choose something to do
            fireEvent.click(screen.getByLabelText(/Hiking/i));

            // Question 6: Choose a place to chill
            // -- No answer -- //

            // Question 7: Choose a Taylor Swift album
            fireEvent.click(screen.getByLabelText(/Folklore/i));

            const submitButton = screen.getByRole("button", { name: /Catch 'em!/i }); 
            fireEvent.click(submitButton);

            const formErrors = screen.getByTestId('form-errors');

            const fieldset2 = screen.getByTestId(/transportation/i);
            expect(within(fieldset2).getByAltText(/Snorlax indicating unanswered question/i)).toBeInTheDocument();

            const fieldset4 = screen.getByTestId(/naturalPhenomenon/i);
            expect(within(fieldset4).getByAltText(/Snorlax indicating unanswered question/i)).toBeInTheDocument();

            const fieldset6 = screen.getByTestId(/placeToChill/i);
            expect(within(fieldset6).getByAltText(/Snorlax indicating unanswered question/i)).toBeInTheDocument(); 

        });


    })

    test ('Given form is answered correctly, error does not display', () => {
        const mockGetFormResults = jest.fn();
        render(<Form getFormResults={mockGetFormResults}/>);

        const color = screen.getByLabelText(/Black/i);
        fireEvent.click(color);

        const transportation = screen.getByLabelText(/Car/i);
        fireEvent.click(transportation);

        const setting = screen.getByLabelText(/Mountain/i);
        fireEvent.click(setting);

        const fenomeno = screen.getByLabelText(/Blizzard/i);
        fireEvent.click(fenomeno);

        const activity = screen.getByLabelText(/Hiking/i);
        fireEvent.click(activity);

        const chill = screen.getByLabelText(/Park/i);
        fireEvent.click(chill);

        const taylor = screen.getByLabelText(/Folklore/i);
        fireEvent.click(taylor);

        console.log(screen.queryByRole("button", { name: /Catch 'em/i}));
        const submitButton = screen.getByRole("button", { name: /Catch 'em!/i }); 
        fireEvent.click(submitButton);

        expect(screen.queryByText(/You need to select one option/i)).not.toBeInTheDocument();
        expect(screen.queryByTestId('form-errors')).not.toBeInTheDocument();
    })

   

});
