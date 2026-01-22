---
title: Package Directory
sidebar_position: 10
---

The Rascal community is very happy to welcome new members of the package directory. Of course, you remain in charge of the project and its legal status.

To join the package directory:
1. Open a [pull request](https://github.com/usethesource/rascal-website/compare) to the rascal website project.
2. Add your project to the `pom.xml` in the relevant places. Take for example the `clair` project.
3. We will _fork_ your project to help with authentication/authorization for publication on the Maven repository.

The new project must jump through some hoops:
* It should follow community guidelines: https://www.usethesource.io/about
* It should run automated tests for all relevant features, and they should succeed.
* It should work with the latest releases of rascal, rascal-maven-plugin, and rascal-language-servers. 
* When a new release comes out of rascal we test all libraries and work with you to overcome compatibility issues. Project's that can not be revived in due time will be taken offline temporarily until they work again with  the latest release. We want to always have a set of packages that work together _now_ in the directory.
* downstream dependencies must have been reviewed (by you) for licensing issues (viral licenses) and proper attribution of copyright and ownership. See also our community guidelines.
* the tutor must be executed via the pom.xml to generate API documentation for the project.
* documented projects with user documentation and executable examples are preferred.

