package xyz.beriholic.w2tools.model

import androidx.compose.ui.graphics.vector.ImageVector
import xyz.beriholic.w2tools.ui.screen.destinations.DirectionDestination

data class Tool(
    val name: String,
    val destination: DirectionDestination? = null,
    val icon: ImageVector? = null,
)