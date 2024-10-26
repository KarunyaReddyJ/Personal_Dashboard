import axios from 'axios';

// Define types for the repository and languages
interface Repo {
    name: string;
}

export interface LanguageData {
    [language: string]: number; // Key is the language name, value is the byte count
}

const getTechnologiesUsed = async (username: string): Promise<LanguageData | null> => {
    try {
        // Fetch user's repositories
        const reposResponse = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
        const repos = reposResponse.data;

        const languageData: LanguageData = {};

        // Create an array of promises to fetch languages
        const languagePromises = repos.map(async (repo) => {
            const languagesResponse = await axios.get<LanguageData>(`https://api.github.com/repos/${username}/${repo.name}/languages`);
            return languagesResponse.data;
        });

        // Wait for all language data promises to resolve
        const languagesArray = await Promise.all(languagePromises);

        // Accumulate languages used
        languagesArray.forEach(languages => {
            for (const [language, bytes] of Object.entries(languages)) {
                if (languageData[language]) {
                    languageData[language] += bytes;
                } else {
                    languageData[language] = bytes;
                }
            }
        });

        console.log(languageData);
        return languageData;
    } catch (error) {
        console.error('Error fetching technologies used:', error);
        return null;
    }
};

// Example usage
export default getTechnologiesUsed;
