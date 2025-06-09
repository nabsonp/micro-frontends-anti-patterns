## Contributing to the Anti-patterns
Contributors should clone the project, create a new branch to commit their changes, and then submit a pull request to merge their changes into the `main` branch.

Follow the next steps to propose a new micro frontend anti-pattern to the catalog:

1. **Clone** the project running `git clone https://github.com/nabsonp/micro-frontends-anti-patterns.git`
1. Create a **new branch** running `git checkout -b your-branch-name`
1. Copy our **[anti-pattern template](./src/anti-patterns/template.json)**.
1. **Rename** it with the anti-pattern's name using kebab-case.
1. Fill out the **anti-pattern fields**:
    - Name: the original or most commonly name adopted to refer the anti-pattern. Must not contain a slashes ("/").;
    - Also Known As: other names (aliases) under which the anti-pattern is known, if any (optional);
    - Category: category used to group anti-patterns. Must be `Intra-frontend`, `Inter-frontend`, `Development` or `Operations`.;
    - Problem: description of a problem and a bad solution commonly adopted; 
    - Symptoms and Consequences: identifiable phenomena signifying the presence of the anti-pattern, describing the negative effects of the problem;
    - Solution: the solution, resolving the forces within the context, which does not have detrimental effects;
    - Resulting Context: what happens when you implement the solutions, good consequences and possible bad ones that must be analyzed; and
    - Example: how the anti-pattern has occurred in real world, may include diagrams and illustrations;
    - Notes: relevant information that do not belong to the other sections, such as other anti-patterns than can occur after implementing the solution (optional);
    - Related Anti-Patterns: the more generic or specific variants of the same anti-pattern, opposite extremes of the same bad practice, patterns sharing several similar symptoms, etc. (optional);
    - References: references to literature in which a description of the particular anti-pattern was found.
1. To add an **image** to the the problem, example and/or solution section:
   1. The image must be a PNG file added to the [/assets](./src//assets/) folder.
   1. Rename the file following the pattern `<anti-pattern-name>-[problem/solution/example].png`.
1. Import and **export the new anti-pattern** file in [src/anti-patterns/index.ts](src/anti-patterns/index.ts).
1. **Commit** your changes running `git commit -m "<message>"`.
    - The `<message>` must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
1. **Push** your changes to the remote branch running `git push origin your-branch-name`.
1. Create a **Pull Request** on the [micro-frontends-anti-patterns](https://github.com/nabsonp/micro-frontends-anti-patterns) repository.

Once the Pull Request is created, one of the maintainers will review and merge your changes so they can be available on the [website](https://mfe-anti-patterns.online/micro-frontends-anti-patterns/#/catalog) shortly afterwards. You can also contribute on existing anti-patterns skiping the 3rd and 4th steps.
