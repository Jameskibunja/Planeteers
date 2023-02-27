import React, { useState, useEffect } from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API_URL = "http://localhost:8003/planeteers";

const App = () => {
const [planeteers, setPlaneteers] = useState([]);
const [search, setSearch] = useState("");
const [sort, setSort] = useState(false);

useEffect(() => {
fetch(API_URL)
.then((res) => res.json())
.then(setPlaneteers);
}, []);

const handleSearch = (searchTerm) => {
setSearch(searchTerm);
};

const addRandomPlaneteer = (newPlaneteer) => {
setPlaneteers((prevPlaneteers) => [...prevPlaneteers, newPlaneteer]);
};

const handleSort = () => {
setSort((prevSort) => !prevSort);
};

const searchedPlaneteers = planeteers.filter((planeteer) => {
if (search === "") {
return true;
} else {
return (
planeteer.name.toLowerCase().includes(search) ||
planeteer.bio.toLowerCase().includes(search)
);
}
});

const sortedPlaneteers = searchedPlaneteers.sort((a, b) => {
if (sort) {
return b.born < a.born ? 1 : -1;
} else {
return a.id > b.id ? 1 : -1;
}
});

return (
<div>
<Header />
<SearchBar onSearch={handleSearch} onSort={handleSort} />
<RandomButton onAddRandomPlaneteer={addRandomPlaneteer} />
<PlaneteersContainer planeteers={sortedPlaneteers} />
</div>
);
};

export default App;