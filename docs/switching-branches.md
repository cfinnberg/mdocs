# Switching Branches

## Overview

::: info
Manjaro specific packages downloaded and installed from the <i>Testing branch</i> or <i>Unstable branch</i> will, by nature, not have been fully tested, and may be unstable.
Please refer to [System Maintenance](/) Section for important maintenance information.
:::

One of the many features that sets Manjaro apart from other Arch-based distributions is that it uses its own dedicated software branches, rather than relying on those provided by Arch itself. In fact, to ensure continued stability and reliability, Manjaro actually uses three distinct branches:

* **Stable branch**: The packages that come to stable have gone through roughly a couple of weeks testing by the users of the *Unstable/Testing* repos, before they get the packages. These packages are usually free of any problems.
* **Testing branch**: This is the second line of defense. Being a larger number of users than those using *Unstable*, they refine the work done prior to them by providing feedback on the packages they receive on updates.
* **Unstable branch**: Unstable is synced several times a day with Arch package releases. Only a subset of Arch packages are modified to suit Manjaro. Those that use *Unstable* need to have the skills to get themselves out of trouble when they move their system to this branch. They are the Manjaro users who are most likely to need to use such skills. Due to the feedback from the users of the *Unstable* repo, many issues are caught and fixed at this level. Although the very latest software will be located here, **using the *unstable branch* is usually safe but - in rare cases - may cause issues with your system!**

**Summing up**, Manjaro packages start their lives in the *unstable* branch. Once they are deemed stable, they are moved to the *testing* branch, where more tests will be conducted to ensure the package is ready to be submitted to the *stable* branch.


::: info
**Remember for Unstable branch:** Manjaro specific packages such as kernels, kernel modules and Manjaro applications enter the repo on <i>unstable</i> branch and it is those packages which are considered unstable when they enter.

Unmodified packages synced from Arch repo are considered stable as they have already been vetted by Archlinux Community.
:::

## Changing to another branch

::: tip
**Have you considered?**
Why not become an active part of the Manjaro community by becoming a tester?
:::

In order to access a branch, you need to change your pacman-mirrors configuration.

You should substitute the value colored in green (for illustrative purposes only) to one of the following: **stable**, **testing** or **unstable**.
```sh
sudo pacman-mirrors --api --set-branch {branch}
```

After you changed the branch, rebuild the mirrorlist and update your packages:
```sh
sudo pacman-mirrors --api --set-branch {branch}
```

## Questions

#### How do I go back after changing to one of the testing branches?

Going back to the stable branch is easy. All you have to do is to repeat the above, and use *stable* as the branch value.

**Be aware** that after switching to a more stable branch you will receive messages from `pacman`, informing about newer packages installed than available in the repo. Don't be alarmed as the situation will resolve itself when the packages reach your current branch.

If for whatever reason you *do* wish to also 'downgrade' packages while changing branches add an extra 'u' to the `pacman` command:
```sh
sudo pacman -Syuu
```

#### How do I check which branch I am currently on?
```sh
pacman-mirrors -G
```
