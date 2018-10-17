package by.redstream.referrer;

import android.os.Bundle;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import by.redstream.referrer.referrer;

public class receiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        Bundle extras = intent.getExtras();

        if (extras != null) {
            referrer.ref = extras.getString("referrer");
        } else {
	    	referrer.ref = "";
		}

    }

}
