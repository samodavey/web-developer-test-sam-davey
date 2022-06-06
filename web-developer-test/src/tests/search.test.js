import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from '../App.js'

//Test blocks
test("Search for Squirtle", async () => {
    render(<App/>)

    //Select the elements I wish to interact with
    const searchBar = screen.getByTestId("searchBar");
    const searchButton = screen.getByTestId("searchButton");

    fireEvent.change(searchBar, {target: {value: 'Squirtle'}});
    
    fireEvent.click(searchButton);
    //Wait 2 seconds
    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getByTestId("pokemonTitle").textContent).toBe("Squirtle");
    expect(screen.getByTestId("pokemonType").textContent).toBe("Type: Water");
})
test("Search for Pikachu lowercase", async () => {
    render(<App/>)

    //Select the elements I wish to interact with
    const searchBar = screen.getByTestId("searchBar");
    const searchButton = screen.getByTestId("searchButton");

    fireEvent.change(searchBar, {target: {value: 'pikachu'}});
    
    fireEvent.click(searchButton);
    //Wait 2 seconds
    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getByTestId("pokemonTitle").textContent).toBe("Pikachu");
    expect(screen.getByTestId("pokemonType").textContent).toBe("Type: Electric");
})
test("Search for Geodude uppercase", async () => {
    render(<App/>)

    //Select the elements I wish to interact with
    const searchBar = screen.getByTestId("searchBar");
    const searchButton = screen.getByTestId("searchButton");

    fireEvent.change(searchBar, {target: {value: 'GEODUDE'}});
    
    fireEvent.click(searchButton);
    //Wait 2 seconds
    await new Promise((r) => setTimeout(r, 1000));
    expect(screen.getByTestId("pokemonTitle").textContent).toBe("Geodude");
    expect(screen.getByTestId("pokemonType").textContent).toBe("Type: Rock");
})