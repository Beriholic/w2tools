package xyz.beriholic.w2tools.ui.component

import androidx.annotation.StringRes
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.ramcosta.composedestinations.navigation.popBackStack
import com.ramcosta.composedestinations.spec.DirectionDestinationSpec
import com.ramcosta.composedestinations.utils.isRouteOnBackStackAsState
import xyz.beriholic.w2tools.R
import xyz.beriholic.w2tools.ui.screen.NavGraphs
import xyz.beriholic.w2tools.ui.screen.destinations.ToolsScreenDestination

@Composable
fun AppBottomBar(
    navController: NavController
) {
    Column {
        NavigationBar(
            tonalElevation = 8.dp
        ) {
            AppBottomBarDestination.entries.forEach { destination ->
                val isCurrentDestOnBackStack by navController.isRouteOnBackStackAsState(destination.direction)
                NavigationBarItem(
                    selected = isCurrentDestOnBackStack,
                    onClick = {
                        if (isCurrentDestOnBackStack) {
                            navController.popBackStack(destination.direction, false)
                        }

                        navController.navigate(destination.direction.route) {
                            popUpTo(NavGraphs.root.route) {
                                saveState = true
                            }
                            launchSingleTop = true
                            restoreState = true
                        }
                    }, icon = {
                        if (isCurrentDestOnBackStack) {
                            Icon(
                                painter = painterResource(destination.iconSelected),
                                stringResource(destination.label)
                            )
                        } else {
                            Icon(
                                painter = painterResource(destination.iconNotSelected),
                                stringResource(destination.label)
                            )
                        }
                    },
                    label = {
                        Text(
                            stringResource(destination.label),
                            overflow = TextOverflow.Visible,
                            maxLines = 1,
                            softWrap = false
                        )
                    }, alwaysShowLabel = false
                )
            }
        }
    }
}

private enum class AppBottomBarDestination(
    val direction: DirectionDestinationSpec,
    @StringRes val label: Int,
    val iconSelected: Int,
    val iconNotSelected: Int,
) {
    Tools(
        ToolsScreenDestination,
        R.string.tools,
        R.drawable.inventory_filled,
        R.drawable.inventory_outline
    ),
//    Star(
//        StarScreenDestination,
//        R.string.star,
//        R.drawable.kid_star_filled,
//        R.drawable.kid_star_outline
//    )
}