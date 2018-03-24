<template>
    <f7-page>
        <!-- TODO: remove this when it's the main page -->
        <f7-navbar back-link="Back" sliding>
            <!-- TODO: remove this when it's the main page -->
            <div class="title">Transactions</div>
        </f7-navbar>

        <!-- there is no components for timeline, so we use html -->
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-item-date">21 <small>MAR 2018</small></div>
                <div class="timeline-item-divider"></div>
                <div class="timeline-item-content">
                    <div class="timeline-item-inner">
                        <div class="timeline-item-time">12:30</div>
                        <div class="timeline-item-text">DOSTHILLS: £3.40</div>
                    </div>
                    <div class="timeline-item-inner">
                        <div class="timeline-item-time">11:30</div>
                        <div class="timeline-item-text">DORDON: £2.40</div>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-date">19 <small>MAR 2018</small></div>
                <div class="timeline-item-divider"></div>
                <div class="timeline-item-content">
                    <div class="timeline-item-inner">
                        <div class="timeline-item-time">12:30</div>
                        <div class="timeline-item-text">STRETTON PARK: £3.40</div>
                    </div>
                    <div class="timeline-item-inner">
                        <div class="timeline-item-time">11:30</div>
                        <div class="timeline-item-text">CHURCH STREET: £2.40</div>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-date">17 <small>MAR 2018</small></div>
                <div class="timeline-item-divider"></div>
                <div class="timeline-item-content">
                    <div class="timeline-item-inner">
                        <div class="timeline-item-time">12:30</div>
                        <div class="timeline-item-text">DOSTHILLS: £3.40</div>
                    </div>
                    <div class="timeline-item-inner">
                        <div class="timeline-item-time">11:30</div>
                        <div class="timeline-item-text">DORDON: £2.40</div>
                    </div>
                </div>
            </div>
        </div>
    </f7-page>
</template>

<script>
    export default {}
</script>