---
title: Test Mojo
keywords:
    - unit test
    - mvn test
    - "rascal:test"
---

#### Synopsis

`mvn test` runs all rascal test functions in all Rascal modules that are reachable from the configured source folders.

#### Description

If you add a test execution to the pom configuration:
* then `mvn test` and `mvn rascal:test` will run all available tests of the current project
* in interactive mode a progress bars are shown per module and for all modules.
* in `target/rascal-test-reports`, each JSON file reports on one module.

For example:
```
<plugin>
    <groupId>org.rascalmpl</groupId>
    <artifactId>rascal-maven-plugin</artifactId>
    <version>0.32.0</version>
    <configuration>
        <bin>${project.build.outputDirectory}</bin>
        <srcs>
            <src>${project.basedir}/src</src>
        </srcs>
    </configuration>
    <executions>
        <execution>
            <id>default-compile</id>
            <phase>compile</phase>
            <goals>
                <goal>compile</goal>
            </goals>
        </execution>
        <execution>
            <id>default-test</id>
            <phase>test</phase>
            <goals>
                <goal>test</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

Additionally you can configure parallel test execution like so:
```
<configuration>
    <parallel>true</parallel>
    <parallelMax>10</parallelMax>
    <parallelPreChecks>
        <check>${project.basedir}/src/MyInitialTests.rsc</check>
    </parallelPreChecks>
</configuration>
```

The `parallelPreChecks` are optional. They can be used to trigger basic tests first; if those fail it does not make much
sense to try the other tests.

#### Benefits

* runs the Rascal tests exactly in the same context as the REPL on the terminal, so if you need to debug all you have to do is start a repl using VScode or `mvn rascal:console` and import the failing module.
* outputs JSON test reports directly used by the github action `ctrf-io/github-test-reporter@v1`

Example github action:

```
    - name: Publish Test Reports
        if: ${{ !cancelled() }}
        uses: ctrf-io/github-test-reporter@v1
        with:
          report-path: 'target/rascal-test-reports/*.json'
          github-report: true
          file-report: true
          pull-request-report: true
          summary-delta-report: true
          insights-report: true
          fail-rate-report: true
          slowest-report: true
          upload-artifact: true
    env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Pitfalls

* Uses the interactive progress bar by default, which would spam a build log with a line for every update. 
   * Use `mvn -B` or `mvn -Drascal.monitor.batch` to turn off the progress bar in CI environments
   * Also if there is an environment variable named `CI` the progress bar will be turned off (as is the case for GitHub actions)